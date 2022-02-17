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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 20rem;
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
    font-size: 2rem;
    margin-bottom: 3rem;
`;

export const ErrorHandler = ({errorMsg}) => {
    return(
        <TextWrapper>
            <p className="text-red-500 font-bold">{errorMsg}</p>
        </TextWrapper>
    )
};

export const ToggleText = ({text, onClick}) => {
    return(
        <TextWrapper>
            <Text onClick={onClick} className="underline text-gray-700">{text}</Text>
            <Text className="underline text-gray-700">Sample</Text>
        </TextWrapper>
    )
}

export const AppBar = ({uid, email, title}) => {
    return(
        <header className="bg-blue-500 h-16 w-full text-gray-100 flex items-center justify-between">
            <div className="h-10 w-10">
            <FontAwesomeIcon icon="fa-solid fa-bars" />
            </div>
            <p className="text-2xl text-center">{title}</p>
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

const TextWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
`;

const Text = styled.p`
    padding: 0;
    cursor: pointer;
`;

const LogOut = () => {
    return (
        <button onClick={signOutCustom}>
            Logout
        </button>
    )
}