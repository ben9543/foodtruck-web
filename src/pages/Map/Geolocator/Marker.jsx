import React from "react";
import {LocationOn} from "@styled-icons/material";

const Marker = ({lat, lng, text, onClick}) => {
    return (
        <div onClick={onClick} className="h-8 w-8 text-red-500 font-bold">
            <LocationOn/>
            {text}
        </div>
    )
}
export default Marker;