import React from "react";
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
export default FoodTruckMarker;