import React, { useState } from "react";
import { db } from "../../../firebase";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth"
import Form from "../../../components/Form";
import { setLoading, endLoading } from "../../../redux/slices/loadingSlice";
import { signInFoodTruck, signOutUser } from "../../../redux/slices/userSlice";
import { setError } from "../../../redux/slices/errorSlice";
import { useDispatch } from 'react-redux';

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
    const [name, setName] = useState("");
    const [info, setInfo] = useState("");
    const [closeAt, setCloseAt] = useState("");

    // Form
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setLoading());
        createUserWithEmailAndPassword(auth, email, pass)
            .then(async({user}) => {
                await setFoodtrucks(user.uid, {name, info, closeAt});
                dispatch(signInFoodTruck({uid:user.uid, email: user.email}));
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
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Business name"/>
            <textarea type="text" onChange={(e)=>setInfo(e.target.value)} className="rounded p-2" placeholder="Short description"/>
            <button type="submit">Sign Up</button>
        </Form>
    );
}

export default FoodTruckSignUp;