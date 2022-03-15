import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, remove } from "firebase/database";
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, endLoading } from "../../redux/slices/loadingSlice";
import { signOutUser } from "../../redux/slices/userSlice";
import { removeError } from "../../redux/slices/errorSlice";
import Geolocator from "./Geolocator";

const auth = getAuth();

export const AppBar = ({uid, email, title, logout}) => {
    return(
        <header className="bg-white shadow-lg fixed h-14 z-50 w-full text-gray-900 flex items-center justify-between">
            <div id="menu" className="flex items-center justify-center h-full ml-4">
                <div>Hamburger</div>
            </div>
            <div id="title" className="flex items-center justify-center h-full">
                <p className="text-xl text-center">{title}</p>
            </div>
            <div id="profile" className="flex items-center justify-center h-full mr-4">
                <button className="" onClick={logout}>Logout</button>
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
    /*const handleError = ({message}) => {
        dispatch(setError({errorCode: "smth bad", errorMessage:message}));
    }*/
    return (
        <>
        <AppBar title={"Foodtruck Hacker v1"} logout={userSignOut}/>
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