import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 22rem;

`;
const ScrollableContainer = styled.div`
    width: 22rem;
    height: 32rem;
`;
const Title = styled.h3`
    text-align: start;
    width: 100%;
`;

const Card = ({title, children, scrollable}) => {
    const scrollStyle = "scroll-smooth overflow-scroll";
    return (
        <>
        {
            scrollable? 
            <ScrollableContainer className={`shadow rounded lg:w-96 bg-white flex flex-col justify-start items-center p-8 ${scrollStyle}`}>
                <Title className="text-3xl my-4 font-semibold">
                    {title}
                </Title>
                {children}
            </ScrollableContainer>
            :
            <Container className={`shadow rounded lg:w-96 bg-white flex flex-col justify-start items-center p-8`}>
                <Title className="text-3xl my-4 font-semibold">
                    {title}
                </Title>
                {children}
            </Container>
        }
        </>
    );
};

export default Card;