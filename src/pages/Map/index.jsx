import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, remove } from "firebase/database";
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, endLoading } from "../../redux/slices/loadingSlice";
import { signOutUser } from "../../redux/slices/userSlice";
import { setError, removeError } from "../../redux/slices/errorSlice";
import Geolocator from "./Geolocator";

const auth = getAuth();

const Map = () => {
    const dispatch = useDispatch();
    const db = getDatabase();
    const user = useSelector((state) => state.user);
    const foodTruckRef = ref(db, 'foodtrucks/' + user.uid);

    const userSignOut = async() => {
        dispatch(setLoading());
        await signOut(auth);
        await remove(foodTruckRef);
        dispatch(signOutUser());
        dispatch(removeError());
        dispatch(endLoading());
    }
    const handleError = ({message}) => {
        dispatch(setError({errorCode: "smth bad", errorMessage:message}));
    }
    return (
        <>
        <button onClick={userSignOut}>Logout</button>
        <Geolocator 
            foodTruck={user.foodTruck} 
            uid={user.uid} 
            truckName={user.truckName ? user.truckName : "Ananymous truck"}
            closeAt={user.closeAt}/>
        </>
    )
}

export default Map;