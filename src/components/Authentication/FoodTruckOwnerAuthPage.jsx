import React, {useState}from "react";
import { signInCustom, signUpCustom } from "../../firebase";
import { Form, Input, Button, SmallTitle, ErrorHandler, ToggleButtonWrapper, ToggleButton, Divider, ModeToggleButton, FormWrapper } from "./styles";
import { USER, SIGNIN, SIGNUP } from "./index";

const FoodTruckMOwnerAuthPage = ({setMode}) => {
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
        <FormWrapper>
        {
            (authMode === SIGNIN) ? 
            <SignIn 
                handleSubmit={handleSubmit}   
                email={email} pass={pass} errorMsg={errorMsg} 
                setEmail={setEmail} setPass={setPass} setAuthMode={setAuthMode} setErrorMsg={setErrorMsg}/>
                :
            <SignUp 
                handleSubmit={handleSubmit} 
                email={email} pass={pass} username={username} errorMsg={errorMsg} 
                setEmail={setEmail} setPass={setPass} setUsername={setUsername} setErrorMsg={setErrorMsg} setAuthMode={setAuthMode} />
        }
        <div style={{width:"25rem"}}>
            <Divider/>
        </div>
        <ModeToggleButton className="border p-6 rounded-full w-full shadow bg-white" onClick={()=>setMode(USER)}>I'm Customer</ModeToggleButton>
        </FormWrapper>
    )
};

const SignIn = ({handleSubmit, setAuthMode, errorMsg, email, pass, setEmail, setPass}) => {
    const handleToggle = () => {
        setEmail("");
        setPass("");
        setAuthMode(SIGNUP);
    };
    
    return (
        <>
        <SmallTitle>Sign In</SmallTitle>
        <Form onSubmit={handleSubmit}>
            <Input className="shadow border-b rounded-t bg-white" id="email" value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" />
            <Input className="shadow border-b bg-white" id="password" value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Password" />
            <Button className="shadow rounded-b bg-green-500 text-gray-100">Submit</Button>
            { errorMsg ? <ErrorHandler errorMsg={errorMsg}/> : null }
            <ToggleButtonWrapper>
                <ToggleButton className="underline text-gray-600" onClick={handleToggle}>Create Account</ToggleButton>
            </ToggleButtonWrapper>
        </Form>
        </>
    );
}

const SignUp = ({handleSubmit, setAuthMode, errorMsg, email, username, pass, setEmail, setPass, setUsername}) => {
    const handleToggle = () => {
        setEmail("");
        setPass("");
        setUsername("")
        setAuthMode(SIGNIN);
    };
    
    return(
        <>
        <SmallTitle>Create a New Account</SmallTitle>
        <Form className="shadow-lg" onSubmit={handleSubmit}>
            <Input className="shadow border-b rounded-t bg-white" id="username" value={username} onChange={e=>setUsername(e.target.value)} type="text" placeholder="Username" />
            <Input className="shadow border-b bg-white" id="email" value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" />
            <Input className="shadow border-b bg-white" id="password" value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Password" />
            {/* More inputs
            <Input className="shadow border-b bg-white" id="password" value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Password" />
            <Input className="shadow border-b bg-white" id="password" value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Password" />
            <Input className="shadow border-b bg-white" id="password" value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Password" />
            */}
            <Button className="shadow rounded-b bg-green-500 text-gray-100">Submit</Button>
            
            { errorMsg ? <ErrorHandler errorMsg={errorMsg}/> : null }
        </Form>
        <ToggleButtonWrapper>
            <ToggleButton className="underline text-gray-600" onClick={handleToggle}>Already Have an Account?</ToggleButton>
        </ToggleButtonWrapper>
        </>
    );
}

export default FoodTruckMOwnerAuthPage;