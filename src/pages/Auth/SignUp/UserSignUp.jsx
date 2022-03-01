import React, { useState } from "react";

import Form from "../../../components/Form";
import { setLoading, endLoading } from "../../../redux/slices/loadingSlice";
import { signInUser, signOutUser } from "../../../redux/slices/userSlice";
import { setError } from "../../../redux/slices/errorSlice";
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const UserSignUp = () => {

    // Redux
    const dispatch = useDispatch();

    // React State
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    // Form
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setLoading());
        createUserWithEmailAndPassword(auth, email, pass)
            .then(({user}) => {
                console.log(user)
                dispatch(signInUser({uid:user.uid, email: user.email}));
            })
            .catch(err => {
                dispatch(signOutUser());
                dispatch(setError({errorCode: err.code, errorMessage: err.message}));
            });
        dispatch(endLoading());
    }
    return(
        <Form onSubmit={handleSubmit}>
            <p className="text-2xl">User</p>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
            <input type="password" onChange={(e)=>setPass(e.target.value)} placeholder="Password"/>
            <button type="submit">Sign Up</button>
        </Form>
    );
}

export default UserSignUp;