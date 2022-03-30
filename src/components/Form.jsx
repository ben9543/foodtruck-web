import React from "react";
import styled from "styled-components";

const Container = styled.form`
    input{
        border-bottom: 1px black solid;
        height: 3rem;
        width: 100%;
        margin-bottom: 1rem;
    }
    textarea{
        border: 1px black solid;
        height: 8rem;
        width: 100%;
        margin-bottom: 1rem;
    }
    input:focus{
        outline: none !important;
    }
    button{
        height: 3rem;
        width: 100%;
        border-radius: 9999px;
        border: 1px black solid;
        margin-top: 2rem;
        margin-bottom: 0.5rem;
    }
    button:hover{
        background-color: #1b1e23;
        color: white;
    }
`;

const Form = ({children ,onSubmit}) => {
    return (
        <Container onSubmit={onSubmit} className="w-full flex flex-col justify-center items-center">
            {children}
        </Container>
    );
};

export default Form;