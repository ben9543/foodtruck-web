import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signUpCustom, signInCustom, auth } from "../../firebase";
import { useSelector, useDispatch } from 'react-redux';
import {
    signInUser,
    signOutUser
} from "../../redux/slices/userSlice";
import FoodTruckOwnerAuthPage from "./FoodTruckOwnerAuthPage";
import UserAuthPage from "./UserAuthPage";
// Styles
import { AuthContainer, AppBar } from "./styles";

export const SIGNIN = "Sign In";
export const SIGNUP = "Sign Up";
export const FOODTURCK = "Food Truck";
export const USER = "User";

const Authentication = () => {

    // Redux State
    const userState = useSelector((state) => state.user);
    const dispatch = useDispatch();
    onAuthStateChanged(auth, (user) => {
        if (user) dispatch(signInUser({uid:user.uid, email: user.email}));
        else dispatch(signOutUser());
    });

    // React State
    const [mode, setMode] = useState(USER);

    return(
        <div className="w-full">
            {
                userState.loggedIn
                ? 
                    <AppBar
                        title={"Food Truck Tracker"}
                        uid={userState.uid} 
                        email={userState.email}
                    />
                :
                <AuthContainer>
                {
                    mode === FOODTURCK? 
                    <FoodTruckOwnerAuthPage setMode={setMode}/>
                        :
                    <UserAuthPage setMode={setMode}/>
                }
                </AuthContainer>
            }
        </div>
    )
}

export default Authentication;