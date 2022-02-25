import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setLoading, endLoading } from "../redux/slices/loadingSlice";
import { signInUser, signOutUser } from "../redux/slices/userSlice";
import { setError } from "../redux/slices/errorSlice";

const Auth = () => {

    // Firebase
    const auth = getAuth();

    // Redux State
    //const userState = useSelector((state) => state.user);
    //const errorState = useSelector((state) => state.error);
    const dispatch = useDispatch();
    

    // React State
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
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

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col w-64">
                    <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" onChange={(e)=>setPass(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Auth;