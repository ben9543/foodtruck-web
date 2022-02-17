import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signUpCustom, signInCustom, auth } from "../../firebase";
import { useSelector, useDispatch } from 'react-redux';
import {
    signInUser,
    signOutUser
} from "../../redux/slices/userSlice";

// Styles
import { AuthContainer, Form, Input, Button, UserProfile, ToggleText, SmallTitle, ErrorHandler } from "./styles";

const SIGNIN = "Sign In";
const SIGNUP = "Sign Up";

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
    const [errorMsg, setErrorMsg] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(authMode === SIGNIN)signInCustom(email, pass, setErrorMsg);
        else if(authMode === SIGNUP)signUpCustom(email, pass, setErrorMsg);
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
                <AuthContainer>
                    <SmallTitle>{authMode}</SmallTitle>
                    <Form onSubmit={handleSubmit}>
                        <Input className="shadow rounded-t bg-white" id="email" value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" />
                        <Input className="shadow bg-white" id="password" value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Password" />
                        <Button className="shadow rounded-b bg-blue-500 text-white">Submit</Button>
                        { errorMsg ? <ErrorHandler errorMsg={errorMsg}/> : null }
                        <ToggleText
                            onClick={handleAuthToggle}
                            text={authMode}
                        />
                    </Form>
                </AuthContainer>
            }
        </div>
    )
}

export default Authentication;