import React, {useState}from "react";
import { signInCustom, signUpCustom } from "../../firebase";
import { Form, Input, Button, ToggleText, SmallTitle, ErrorHandler, ToggleButtonWrapper, ToggleButton } from "./styles";
import { FOODTURCK, USER, SIGNIN, SIGNUP } from "./index";

const UserAuthPage = ({setMode}) => {
    
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
    return (
        <>
        <SmallTitle>{`User ${authMode}`}</SmallTitle>
        <Form onSubmit={handleSubmit}>
            <Input className="shadow rounded-t bg-white" id="email" value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" />
            <Input className="shadow bg-white" id="password" value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Password" />
            <Button className="shadow rounded-b bg-blue-500 text-gray-100">Submit</Button>
            { errorMsg ? <ErrorHandler errorMsg={errorMsg}/> : null }
            <ToggleButtonWrapper>
                <ToggleButton>{(authMode === SIGNIN) ? SIGNUP : SIGNIN}</ToggleButton>
                <ToggleButton>Are you food truck business owner?</ToggleButton>
            </ToggleButtonWrapper>
        </Form>
        </>
    )
};

export default UserAuthPage;