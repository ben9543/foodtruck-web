import React from "react";
//import { getDatabase, ref, update } from "firebase/database";
import { useDispatch, useSelector } from 'react-redux';
//import { setLoading, endLoading } from "../../redux/slices/loadingSlice";
//import { signOutUser } from "../../redux/slices/userSlice";
//import { removeError } from "../../redux/slices/errorSlice";
import Geolocator from "./Geolocator";

const Map = () => {
    const user = useSelector((state) => state.user);

    return (
        <>
        <Geolocator 
            foodTruck={user.foodTruck} 
            uid={user.uid} 
            truckName={user.truckName}
            closeAt={user.closeAt}
            info={user.info}/>
        </>
    )
}

export default Map;