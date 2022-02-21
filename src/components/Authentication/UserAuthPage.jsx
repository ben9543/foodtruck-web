import React, {useState}from "react";
import { signInCustom, signUpCustom } from "../../firebase";
import { Form, Input, Button, SmallTitle, ErrorHandler, ToggleButtonWrapper, ToggleButton } from "./styles";
import { FOODTURCK, USER, SIGNIN, SIGNUP } from "./index";

const UserAuthPage = ({setMode}) => {
    
    // React State
    const [authMode, setAuthMode] = useState(SIGNIN);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [username, setUsername] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(authMode === SIGNIN)signInCustom(email, pass, setErrorMsg);
        else if(authMode === SIGNUP)signUpCustom(email, pass, setErrorMsg);
    }
    return (
        authMode === SIGNIN ? 
        <SignIn handleSubmit={handleSubmit} setAuthMode={setAuthMode} errorMsg={errorMsg} 
            email={email} pass={pass} 
            setEmail={setEmail} setPass={setPass}/>
            :
        <SignUp handleSubmit={handleSubmit} setAuthMode={setAuthMode} errorMsg={errorMsg} 
            email={email} pass={pass} username={username}
            setEmail={setEmail} setPass={setPass} setUsername={setUsername}/>
    )
};

const SignIn = ({handleSubmit, setAuthMode, errorMsg, email, pass, setEmail, setPass}) => {
    return (
        <>
        <SmallTitle>Sign In</SmallTitle>
        <Form onSubmit={handleSubmit}>
            <Input className="shadow rounded-t bg-white" id="email" value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" />
            <Input className="shadow bg-white" id="password" value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Password" />
            <Button className="shadow rounded-b bg-blue-500 text-gray-100">Submit</Button>
            { errorMsg ? <ErrorHandler errorMsg={errorMsg}/> : null }
            <ToggleButtonWrapper>
                <ToggleButton className="underline text-gray-600" onClick={()=>setAuthMode(SIGNUP)}>Create Account</ToggleButton>
            </ToggleButtonWrapper>
        </Form>
        </>
    );
}

const SignUp = ({handleSubmit, setAuthMode, errorMsg, email, username, pass, setEmail, setPass, setUsername}) => {
    return(
        <>
        <SmallTitle>Create a New Account</SmallTitle>
        <Form onSubmit={handleSubmit}>
            <Input className="shadow bg-white" id="username" value={username} onChange={e=>setUsername(e.target.value)} type="text" placeholder="Username" />
            <Input className="shadow rounded-t bg-white" id="email" value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" />
            <Input className="shadow bg-white" id="password" value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Password" />
            <Button className="shadow rounded-b bg-blue-500 text-gray-100">Submit</Button>
            { errorMsg ? <ErrorHandler errorMsg={errorMsg}/> : null }
            <ToggleButtonWrapper>
                <ToggleButton className="underline text-gray-600" onClick={()=>setAuthMode(SIGNIN)}>Already Have an Account?</ToggleButton>
            </ToggleButtonWrapper>
        </Form>
        </>
    );
}

export default UserAuthPage;