import styled from "styled-components";

const Conainer = styled.div`

    width: 100%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    color: gray;
    span{
        border-top: 1px solid gray;
        transform: translateY(50%);
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            text-align: center;
        }
    }
`;

const Divider = () => {
    return (
        <Conainer>
            <span></span>
            <div><p>or</p></div>
            <span></span>
        </Conainer>
    )
}



export default Divider;