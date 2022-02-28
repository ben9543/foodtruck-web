import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { isFoodtruck } from "../../firebase";
import { useDispatch } from 'react-redux';
import { setLoading, endLoading } from "../../redux/slices/loadingSlice";
import { signInUser, signInFoodTruck, signOutUser } from "../../redux/slices/userSlice";
import { setError } from "../../redux/slices/errorSlice";
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
        e.preventDefault();
        dispatch(setLoading());
        await signInWithEmailAndPassword(auth, email, pass)
            .then(async({user}) => {
                if (await isFoodtruck(user.uid)){
                    dispatch(signInFoodTruck({uid: user.uid, email: user.email}));
                }else{
                    dispatch(signInUser({uid: user.uid, email: user.email}));
                }
            })
            .catch(err => {
                dispatch(signOutUser());
                dispatch(setError({errorCode: err.code, errorMessage: err.message}));
            });
        dispatch(endLoading());
    }
    return(
        <Card title="Sign In">
            <Form onSubmit={handleSignIn}>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                <input type="password" onChange={(e)=>setPass(e.target.value)} placeholder="Password"/>
                <button type="submit">Submit</button>
            </Form>
            <Toggle handleToggle={handleToggle} toggleBtnText={"Sign Up"} toggleDescriptionText={"Don't have an account?"}/>
        </Card>
    )
}

export default SignIn;