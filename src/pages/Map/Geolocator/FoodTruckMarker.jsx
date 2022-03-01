import React from "react";
const FoodTruckMarker = ({lat, lng, text}) => {
    return (
        <div className="bg-red-500 rounded-full h-3 w-3">
            <div>
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