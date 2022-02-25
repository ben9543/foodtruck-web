import React,{useState} from "react";
import Form from "../../../components/Form";

const UserSignUp = () => {
    // React State
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    return(
        <Form>
            <p className="text-2xl">User</p>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
            <input type="password" onChange={(e)=>setPass(e.target.value)} placeholder="Password"/>
            <button>Sign Up</button>
        </Form>
    );
}

export default UserSignUp;