import React, { useState } from "react";
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
    const [toggle, setToggle] = useState(false);
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