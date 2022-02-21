import styled from "styled-components";
import { signOutCustom } from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    max-width: 25rem;
    width: 85%;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width:100%;
`;

export const Input = styled.input`
    height: 3rem;
    padding: 1rem;
    width: 100%;
`;

export const Button = styled.button`
    height: 3rem;
    width: 100%;
    padding: 0;
`;

export const SmallTitle = styled.div`
    font-size: 1.7rem;
    margin-bottom: 2rem;
`;

export const ErrorHandler = ({errorMsg}) => {
    return(
        <ToggleButtonWrapper>
            <p className="text-red-500 font-bold">{errorMsg}</p>
        </ToggleButtonWrapper>
    )
};

export const AppBar = ({uid, email, title}) => {
    return(
        <header className="bg-blue-500 fixed h-16 z-50 w-full text-gray-100 flex items-center justify-between">
            <div className="h-10 w-10">
            <FontAwesomeIcon icon="fa-solid fa-bars" />
            </div>
            <p className="text-xl text-center">{title}</p>
            <div>
                <UserProfile uid={uid} email={email}/>
            </div>
        </header>
    );
}

const UserProfile = ({uid, email}) => {
    return (
        <div>
            <LogOut/>
        </div>
    )
}

export const ToggleButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
`;

export const ToggleButton = styled.p`
    padding: 0;
    cursor: pointer;
`;

export const ModeToggleButton = styled.button`
    font-weight: 700;
    width: 100%;
`;

export const Divider = styled.div`
    width: 100%;
    border-top: 1px solid gray;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const LogOut = () => {
    return (
        <button className="mr-6" onClick={signOutCustom}>
            Logout
        </button>
    )
}