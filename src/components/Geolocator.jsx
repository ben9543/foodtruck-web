import React from "react";
import { geolocated } from "react-geolocated";
import GoogleMapReact from 'google-map-react';
import Loading from "react-simple-loading";
import { getDatabase, ref, onValue } from "firebase/database";
// {/*this.props.coords.latitude/longitude/altitude/heading/speed*/}
const config = {
    positionOptions: {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: Infinity,
    },
    watchPosition: true,
    userDecisionTimeout: null,
    suppressLocationOnMount: false,
    geolocationProvider: navigator.geolocation,
    isOptimisticGeolocationEnabled: true
}
const LoadingContainer = ({children}) => {
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContents: "center",
            alignItems: "center"
        }}>
            {children}
        </div>
    )
}
const Marker = ({lat, lng, text}) => {
    return (
        <div>
            <div style={{border: "3px solid gray", borderRadius: "9999px", height: "20px", width: "20px"}}>
                {text}
            </div>
            <details>
                <summary>Show Coord</summary>
                <div>
                    <p>Lat: {lat}</p>
                    <p>Lng: {lng}</p>
                </div>
            </details>
        </div>
    )
}
const FoodTruckMarker = ({lat, lng, text}) => {
    return (
        <div>
            <div style={{border: "3px solid red", borderRadius: "9999px", height: "20px", width: "20px"}}>
                {text}
            </div>
            <details>
                <summary>Show Coord</summary>
                <div>
                    <p>Lat: {lat}</p>
                    <p>Lng: {lng}</p>
                </div>
            </details>
        </div>
    )
}

class Geolocator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount(){
        const db = getDatabase();
        const starCountRef = ref(db, 'foodtrucks/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            this.setState({data});
            console.log(this.state.data)
        });
    }

    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_APIKEY }}
                defaultCenter={{
                    lat:this.props.coords.latitude, 
                    lng:this.props.coords.longitude
                }}
                defaultZoom={15}
                >
                
                {/* User marker */}
                <Marker
                    lat={this.props.coords.latitude}
                    lng={this.props.coords.longitude}
                    text="I'm here"
                />

                {/* Example marker */}
                {
                    this.state.data.map((v,k) => {
                        if (v === null) return null
                        console.log(v)
                        return (
                            <FoodTruckMarker
                                lat={v.lat}
                                lng={v.lng}
                                text={v.name}
                            />
                        );
                    })
                }

                </GoogleMapReact>
            </div>
        ) : (
            <LoadingContainer>
                <Loading
                    color={'firebrick'}
                    stroke={'10px'}
                    size={'100px'}
                />
                <p>Getting all food truck data ...</p>
            </LoadingContainer>
        );
    }
}

export default geolocated(config)(Geolocator);