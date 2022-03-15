import React from "react";
import { Truck } from "@styled-icons/fa-solid";
const FoodTruckMarker = ({lat, lng, text}) => {
    return (
        <div className="text-gray-800 h-6 w-6 font-bold">
            <Truck/>
            <div>
                <p>{text}</p>
            </div>
        </div>
    )
}
export default FoodTruckMarker;