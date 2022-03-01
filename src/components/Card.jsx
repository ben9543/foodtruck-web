import React from "react";
import styled from "styled-components";

const Container = styled.div`
`;
const Title = styled.h3`
    text-align: start;
    width: 100%;
`;

const Card = ({title, children}) => {
    return (
        <Container className="shadow rounded w-96 bg-white flex flex-col justify-center items-center p-8">
            <Title className="text-3xl my-4 font-semibold">
                {title}
            </Title>
            {children}
        </Container>
    );
};

export default Card;