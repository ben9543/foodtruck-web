import React from "react";
import styled from "styled-components";
import { Truck } from "@styled-icons/fa-solid";
import { CloudOffline } from "@styled-icons/fluentui-system-regular"

const FoodTruckMarker = ({lat, lng, text, online, myFoodTruck}) => {
    let color = "gray-800";
    if (online) color = "green-500";
    return (
        <div className={`text-${color} w-12 h-12 font-bold grid grid-cols-5 grid-rows-4`}>
            <div className="row-span-3 col-span-3 flex items-center justify-center ">
                <Truck size={30}/>
            </div>
            <div className="row-span-3 col-span-2 flex items-start justify-end text-black">
                {
                !online ?
                <CloudOffline size={30}/>
                    :
                null
                }
            </div>
            <div className="row-span-1">
                <p style={{fontSize: ".6rem"}} className="text-gray-800">{text}</p>
            </div>
        </div>
    )
}
export default FoodTruckMarker;