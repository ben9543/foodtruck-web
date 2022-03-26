import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, update } from "firebase/database";
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, endLoading } from "../../redux/slices/loadingSlice";
import { signOutUser } from "../../redux/slices/userSlice";
import { removeError } from "../../redux/slices/errorSlice";
import Geolocator from "./Geolocator";

const auth = getAuth();
const LOGO_URL = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3a47f248449813.5608313a6db56.png";

export const AppBar = ({uid, email, title, logout}) => {
    return(
        <header className="bg-white shadow-lg fixed h-14 z-50 w-full text-gray-900 flex items-center justify-between">
            <div id="hamburger" className="lg:hidden flex items-center justify-center h-full ml-4">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div id="title" className="lg:ml-6 lg:w-80 flex items-center justify-between h-full">
                <span id="logo-container" className="h-8 w-8">
                    <img src={LOGO_URL} className="object-cover w-full h-full" alt=""/>
                </span>
                <div id="title-container" className="w-full">
                    <p className="text-xl text-center w-full">{title}</p>
                </div>
            </div>
            <div id="menu" className="lg:flex hidden items-center justify-start h-full w-full ml-8 text-sm">
                <span className="mr-4">Menu 1</span>
                <span className="mr-4">Menu 2</span>
                <span className="">Menu 3</span>
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
        if (user.foodTruck && foodTruckRef){
            await update(foodTruckRef, {online: false});
        }
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