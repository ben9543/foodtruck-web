import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signUpCustom, signInCustom, signOutCustom, auth } from "../firebase";
import { useSelector, useDispatch } from 'react-redux';
// import { signInWithGoogle } from "../auth/auth_google";
import {
    signInUser,
    // signUpUser,
    signOutUser
} from "../redux/slices/userSlice";

const SIGNIN = "signin";
const SIGNUP = "signup";

const UserProfile = ({uid, email}) => {
    return (
        <div>
            <p>ID: {uid}</p>
            <p>Email: {email}</p>
            <LogOut/>
        </div>
    )
}

const LogOut = () => {
    return (
        <button onClick={signOutCustom}>
            Logout
        </button>
    )
}

const Authentication = () => {

    // Redux State
    const userState = useSelector((state) => state.user);
    const dispatch = useDispatch();
    onAuthStateChanged(auth, (user) => {
        if (user) dispatch(signInUser({uid:user.uid, email: user.email}));
        else dispatch(signOutUser());
    });

    // React State
    const [authMode, setAuthMode] = useState(SIGNIN);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(authMode === SIGNIN)signInCustom(email, pass);
        else if(authMode === SIGNUP)signUpCustom(email, pass);
    }
    const handleAuthToggle = (e) => {
        e.preventDefault();
        if(authMode === SIGNIN)setAuthMode(SIGNUP);
        else if(authMode === SIGNUP)setAuthMode(SIGNIN);
    }

    return(
        <div>
            {
                userState.loggedIn
                ? 
                    <UserProfile uid={userState.uid} email={userState.email}/>
                :
                <>
                <form onSubmit={handleSubmit}>
                    <input id="email" value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" />
                    <input id="password" value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Password" />
                    <button onClick={handleAuthToggle}>
                        {authMode}
                    </button>
                    <button>Submit</button>
                </form>
                {/* 
                <div>
                    <button onClick={signInWithGoogle}>Google</button>
                </div>
                */}
                </>
            }
        </div>
    )
}

export default Authentication;