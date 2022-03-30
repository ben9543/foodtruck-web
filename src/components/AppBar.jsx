import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, update } from "firebase/database";
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, endLoading } from "../redux/slices/loadingSlice";
import { homePage, authPage, mapPage, defaultPage } from "../redux/slices/pageSlice";
import { signOutUser } from "../redux/slices/userSlice";
import { removeError } from "../redux/slices/errorSlice";
import { pageConfig } from "../redux/slices/reducers/pageReducers";
import Logo from "./logo.png"

const auth = getAuth();

const AppBar = ({title}) => {
    const dispatch = useDispatch();
    const db = getDatabase();
    const user = useSelector((state) => state.user);
    const page = useSelector((state) => state.page);
    const foodTruckRef = ref(db, 'foodtrucks/' + user.uid);

    let bgColor = "bg-transparent";
    if (page.page === pageConfig.map || page.page === pageConfig.auth) bgColor = "bg-blue-800";

    const userSignOut = async() => {
        dispatch(setLoading());
        await signOut(auth);
        if (user.foodTruck && foodTruckRef){
            await update(foodTruckRef, {online: false});
        }
        dispatch(signOutUser());
        dispatch(removeError());
        dispatch(endLoading());
        dispatch(defaultPage());
    }
    return(
        <header className={`${bgColor} fixed h-14 z-50 w-full text-gray-200 flex items-center justify-between`}>
            <div id="hamburger" className="lg:hidden flex items-center justify-center h-full ml-4">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div id="title" className="lg:ml-6 lg:w-80 flex items-center justify-between h-full">
                <span id="logo-container" className="h-8 w-8">
                    <img src={Logo} className="object-cover w-full h-full" alt=""/>
                </span>
                <div id="title-container" className="w-full">
                    <p className="text-xl text-center w-full">{title}</p>
                </div>
            </div>
            <div id="menu" className="lg:flex hidden items-center justify-start h-full w-full ml-8 text-sm">
                {
                    user.loggedIn?
                    <>
                        <span onClick={()=>dispatch(mapPage())} className="mr-4 cursor-pointer">Map</span>
                    </>
                    :null
                }
                <span className="mr-4 cursor-pointer">Menu 2</span>
                <span className="cursor-pointer">Menu 3</span>
            </div>
            <div id="profile" className="flex items-center justify-center h-full mr-4">
                {
                    user.loggedIn?
                    <button className="w-16" onClick={userSignOut}>Logout</button>
                        :
                    <button className="w-16" onClick={()=>dispatch(authPage())}>Sign In</button>
                }
            </div>
        </header>
    );
}

export default AppBar;