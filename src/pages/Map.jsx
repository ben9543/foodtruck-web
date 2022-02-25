import React from "react";
import { getAuth, signOut } from "firebase/auth"
import { useDispatch } from 'react-redux';
import { setLoading, endLoading } from "../redux/slices/loadingSlice";
import { signOutUser } from "../redux/slices/userSlice";
import { setError, removeError } from "../redux/slices/errorSlice";

const auth = getAuth();

const Map = () => {
    const dispatch = useDispatch();
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
        <div>MAP</div>
        <button onClick={userSignOut}>Logout</button>
        </>
    )
}

export default Map;