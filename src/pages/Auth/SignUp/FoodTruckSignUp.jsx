import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { db } from "../../../firebase";
import { useDispatch } from 'react-redux';
import { setLoading, endLoading } from "../../../redux/slices/loadingSlice";
import { signInFoodTruck, signOutUser } from "../../../redux/slices/userSlice";
import { setError } from "../../../redux/slices/errorSlice";

import Form from "../../../components/Form";

const auth = getAuth();

const setFoodtrucks = async(uid, option) => {
    await setDoc(doc(db, "foodtrucks", uid), option).catch(err => err);
}
  
const FoodTruckSignUp = () => {

    // Redux
    const dispatch = useDispatch();

    // React State
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [truckName, setTruckName] = useState("");
    const [info, setInfo] = useState("");
    const [closeAt, setCloseAt] = useState(0);

    // Form
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setLoading());
        createUserWithEmailAndPassword(auth, email, pass)
            .then(async({user}) => {
                await setFoodtrucks(user.uid, {truckName, info, closeAt});
                dispatch(signInFoodTruck({uid:user.uid, email: user.email, truckName, closeAt, info}));
            })
            .catch(err => {
                dispatch(signOutUser());
                dispatch(setError({errorCode: err.code, errorMessage: err.message}));
            });
        dispatch(endLoading());
    }
    return(
        <Form onSubmit={handleSubmit}>
            <p className="text-2xl">Foodtruck Owner</p>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
            <input type="password" onChange={(e)=>setPass(e.target.value)} placeholder="Password"/>
            <input type="text" required onChange={(e)=>setTruckName(e.target.value)} placeholder="Business name"/>
            <textarea type="text" required onChange={(e)=>setInfo(e.target.value)} className="rounded p-2" placeholder="Short description"/>
            <button type="submit">Sign Up</button>
        </Form>
    );
}

export default FoodTruckSignUp;