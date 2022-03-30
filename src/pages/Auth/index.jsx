import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homePage } from "../../redux/slices/pageSlice";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

// Constants
export const SIGNIN = "Sign In";
export const SIGNUP = "Sign Up";
export const FOODTURCK = "Food Truck";
export const USER = "Customer";

const Auth = () => {

    // true == signup (default)
    // false == signin
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const [toggle, setToggle] = useState(false);
    if (user.loggedIn) dispatch(homePage());
    return (
        <div className="flex flex-col h-screen w-full justify-center items-center">
            {
                toggle?
                <SignUp toggle={toggle} setToggle={setToggle}/>
                    :
                <SignIn toggle={toggle} setToggle={setToggle}/>
            }
        </div>
    )
}

export default Auth;