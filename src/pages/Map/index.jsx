import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, remove } from "firebase/database";
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, endLoading } from "../../redux/slices/loadingSlice";
import { signOutUser } from "../../redux/slices/userSlice";
import { setError, removeError } from "../../redux/slices/errorSlice";
import Geolocator from "./Geolocator";

const auth = getAuth();

export const AppBar = ({uid, email, title, logoutBtn}) => {
    return(
        <header className="bg-blue-500 fixed h-14 z-50 w-full text-gray-100 flex items-center justify-between">
            <div className="h-10 w-10 border">
                hamburger
            </div>
            <p className="text-xl text-center">{title}</p>
            <div>
                {logoutBtn}
            </div>
        </header>
    );
}

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
        <AppBar title={"Foodtruck Hacker v1"} logoutBtn={<button onClick={userSignOut}>Logout</button>}/>
        <Geolocator 
            foodTruck={user.foodTruck} 
            uid={user.uid} 
            truckName={user.truckName ? user.truckName : "Ananymous truck"}
            closeAt={user.closeAt ? user.truckName : 0}/>
        </>
    )
}

export default Map;