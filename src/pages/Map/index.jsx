import React from "react";
import { getAuth, signOut } from "firebase/auth"
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, endLoading } from "../../redux/slices/loadingSlice";
import { signOutUser } from "../../redux/slices/userSlice";
import { setError, removeError } from "../../redux/slices/errorSlice";
import Geolocator from "./Geolocator";

const auth = getAuth();

const Map = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const userSignOut = async() => {
        dispatch(setLoading());
        await signOut(auth);
        dispatch(signOutUser());
        dispatch(removeError());
        dispatch(endLoading());
    }
    const handleError = ({message}) => {
        dispatch(setError({errorCode: "smth bad", errorMessage:message}));
    }
    return (
        <>
        <Geolocator foodTruck={user.foodTruck} uid={user.uid}/>
        <button onClick={userSignOut}>Logout</button>
        </>
    )
}

export default Map;