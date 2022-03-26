import React from "react";
import { Truck } from "@styled-icons/fa-solid";
const FoodTruckMarker = ({lat, lng, text, online, myFoodTruck}) => {
    let color = "gray-800";
    let size = "h-5 w-5";
    if (myFoodTruck) size = "h-6 w-6"; 
    if (online) color = "red-500";

    return (
        <div className={`text-${color} ${size} font-bold`}>
            <Truck/>
            <div>
                <p>{text}</p>
            </div>
        </div>
    )
}
export default FoodTruckMarker;