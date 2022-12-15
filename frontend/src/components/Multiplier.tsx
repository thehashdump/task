import styled from "styled-components";
import { useLocation } from "react-router-dom";

function Multiplier() {
  const value = -5
  const location = useLocation()
  return (
    <>
        <Title>Multiplier Component:</Title>
        <Container>
            <Expression> 
                {`${value} * ${location.state?.counter}`}
            </Expression>
            <Result>
                <p>
                    {value*location.state?.counter}
                </p>
            </Result>
        </Container> 
    </>   
  )
}
export const Title = styled.h1`
    font-size: 20px;
    font-weight: 600;
    margin: 10 auto;
    justify-content: center;
    align-items: center;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    width: 200px;
`;
export const Expression = styled.p`
    width: 100%;
    display: flex;
    font-size: 20px;
    font-weight: 600;
    margin: 10 auto;
    justify-content: center;
    align-items: center;
`;
export const Result = styled.div`
    display: flex;
    align-self: flex-end;
    justify-self: flex-end;
    width: 80px;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
`;
export default Multiplier