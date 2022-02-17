import styled from "styled-components";
import { signOutCustom } from "../../firebase";

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

export const UserProfile = ({uid, email}) => {
    return (
        <div>
            <p>ID: {uid}</p>
            <p>Email: {email}</p>
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