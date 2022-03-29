import React from "react";
import GoogleMapReact from 'google-map-react';
import { geolocated } from "react-geolocated";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { realtime_db } from "../../../firebase";
import Loading from "react-simple-loading";
import Observer from "./Observer";
import Marker from "./Marker";
import FoodTruckMarker from "./FoodTruckMarker";

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

const writeFoodTruckData = ({foodtruckId, lat, lng, truckName, closeAt, online}) => {
    set(ref(realtime_db, 'foodtrucks/' + foodtruckId), {
        lat, lng, truckName, closeAt, online
    });
}

const LoadingContainer = ({children}) => {
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContents: "center",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -25%)"
        }}>
            {children}
        </div>
    )
}

class Geolocator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            lat: 0,
            lng: 0
        };
    }

    componentDidMount(){
        // console.log("Geolocator props: ", this.props)
        
        // Fetch all foodtruck data
        const db = getDatabase();
        const foodTruckRef = ref(db, 'foodtrucks/');
        onValue(foodTruckRef, (snapshot) => {
            const data = snapshot.val();
            this.setState({data});
        });
        // If user is foodtruck owner, need to update `foodtrucks/${uid}`
    }

    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <div style={{ height: '100vh', width: '100%', position: "relative"}}>
                {
                    // If user is foodtruck owner,
                    this.props.foodTruck?
                    <Observer 
                        lat={this.props.coords.latitude} 
                        lng={this.props.coords.longitude} 
                        didUpdate={writeFoodTruckData}
                        truckName={this.props.truckName}                // Replace with foodtruck name
                        foodtruckId={this.props.uid}       // Give unique uid
                        closeAt={this.props.closeAt}
                        online={true}
                    />:null
                }
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_APIKEY }}
                    defaultCenter={{
                        lat:this.props.coords.latitude, 
                        lng:this.props.coords.longitude
                    }}
                    defaultZoom={15}>
                
                {/* User marker */}
                {
                    this.props.foodTruck?
                    <FoodTruckMarker
                        myFoodTruck={true}
                        lat={this.props.coords.latitude}
                        lng={this.props.coords.longitude}
                        online={true}
                        text={"My Foodtruck"}
                    />
                        :
                    <Marker
                        lat={this.props.coords.latitude}
                        lng={this.props.coords.longitude}
                        text={"I'm Here"}
                    />
                }

                {/* All Truck Markers */}
                {
                    this.state.data? 
                    Object.keys(this.state.data).map((v,k) => {
                        console.log(this.state.data[v].online)
                        if (this.state.data[v] === null) return null;
                        if (this.props.uid === v) return null;
                        if (v === "online") return null;
                        return (
                            <FoodTruckMarker
                                key={k}
                                myFoodTruck={false}
                                lat={this.state.data[v].lat}
                                lng={this.state.data[v].lng}
                                text={this.state.data[v].truckName}
                                // info={this.state.data[v].info}
                                online={this.state.data[v].online}
                                closeAt={this.state.data[v].closeAt}
                            />
                        );
                    }) : null
                }
                </GoogleMapReact>
            </div>
        ) : (
            <LoadingContainer>
                <Loading
                    color={'#2196F3'}
                    stroke={'10px'}
                    size={'100px'}
                />
                <p>Getting all food truck data ...</p>
            </LoadingContainer>
        );
    }
}

export default geolocated(config)(Geolocator);