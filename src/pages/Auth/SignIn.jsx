import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { setLoading, endLoading } from "../../redux/slices/loadingSlice";
import { signInUser } from "../../redux/slices/userSlice";
import { setError } from "../../redux/slices/errorSlice";
import { 
    SIGNIN,
    SIGNUP,
    FOODTURCK,
    USER,
} from "./index";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Toggle from "./Toggle";

const auth = getAuth();

const SignIn = ({toggle, setToggle}) => {
    const dispatch = useDispatch();

    // React State
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleToggle = () =>{
        setToggle(!toggle);
    }

    const handleSignIn = async(e) => {
        dispatch(setLoading());
        await signInWithEmailAndPassword(auth, email, pass)
            .then(({user}) => {
                dispatch(signInUser({uid: user.uid, email: user.email}));
            })
            .catch(err => {
                dispatch(setError({errorCode: err.code, errorMessage: err.message}));
            });
        dispatch(endLoading());
    }
    return(
        <Card title="Sign In">
            <Form onSubmit={(e)=>e.preventDefault()}>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                <input type="password" onChange={(e)=>setPass(e.target.value)} placeholder="Password"/>
                <button type="submit" onClick={handleSignIn}>Submit</button>
            </Form>
            <Toggle handleToggle={handleToggle} toggleBtnText={"Sign Up"} toggleDescriptionText={"Don't have an account?"}/>
        </Card>
    )
}

export default SignIn;