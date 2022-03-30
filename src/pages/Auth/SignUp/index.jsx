import React, { useState } from "react";
import Divider from "../../../components/Divider";
import { 
    FOODTURCK,
    USER,
} from "../index";
import Card from "../../../components/Card";
import Toggle from "../Toggle";
import FoodTruckSignUp from "./FoodTruckSignUp";
import UserSignUp from "./UserSignUp";

const SignIn = ({toggle, setToggle}) => {

    // React State
    const [mode, setMode] = useState(null);

    const handleToggle = () =>{
        setToggle(!toggle);
        setMode(null);
    }
    
    return(
        <Card title="Sign Up" scrollable={true}>
        {
            (mode === FOODTURCK)?
            <FoodTruckSignUp />
                :
            (mode === USER)?
            <UserSignUp />
                :
            <> 
            {/* Default Page */}
            <div id="description" className=" my-6">
                <p>Please select account type</p>
            </div>
            <button onClick={()=>setMode(FOODTURCK)} className="flex items-center justify-center hover:bg-green-700 hover:text-gray-200 rounded-full w-full border border-green-800 px-10 py-4 text-xl mb-4">
                <p className="break-normal whitespace-nowrap">Foodtruck business owner</p>
            </button>
            <button onClick={()=>setMode(USER)} className="flex items-center justify-center hover:bg-blue-800 hover:text-gray-200 rounded-full w-full border border-blue-900 px-10 py-4 text-xl mb-4">
                <p>User</p>
            </button>
            </>
        }
        {
            /* When selecting mode divider shows up on the top of sign in? button */
            mode === null?
            <Divider/>:null
        }
        <Toggle handleToggle={handleToggle} toggleBtnText={"Sign In"} toggleDescriptionText={"Already have an account?"}/>
        {
            (mode === FOODTURCK)?
            <>
            <Divider/>
            <button onClick={()=>setMode(USER)} className="hover:bg-blue-500 rounded-full w-full border border-blue-600 px-10 py-4 text-xl mb-4">User</button>
            </>
                :
            (mode === USER)?
            <>
            <Divider/>
            <button onClick={()=>setMode(FOODTURCK)} className="hover:bg-green-500 rounded-full w-full border border-green-600 px-10 py-4 text-xl mb-4">Foodtruck business owner</button>
            </>
                :
            null
        }
        </Card>
    );
}

export default SignIn;