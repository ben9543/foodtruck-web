import React from "react";

const Marker = ({lat, lng, text, onClick}) => {
    return (
        <div onClick={onClick}>
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
export default Marker;