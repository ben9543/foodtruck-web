import React from "react";
//import { getDatabase, ref, update } from "firebase/database";
import { useDispatch, useSelector } from 'react-redux';
import { homePage } from "../../redux/slices/pageSlice";
//import { signOutUser } from "../../redux/slices/userSlice";
//import { removeError } from "../../redux/slices/errorSlice";
import Geolocator from "./Geolocator";

const Map = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    if (!user.loggedIn) dispatch(homePage());
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