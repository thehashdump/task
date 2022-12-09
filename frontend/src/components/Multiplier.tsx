import axios from '../util/axiosConfig'
import { useEffect, useState } from "react";
import styled from "styled-components";

function Multiplier() {
  const value = -5
  const [value2, setValue2] = useState(0);
  useEffect(() => {
    const getCounterValue = ()=>{
        try {
            setInterval(async function () {
                const res = await axios.get('/counter')
                setValue2(res.data.value)
            }, 1000);
            
        } catch (error) {
            console.log(error)
        }
    }
    getCounterValue()
  })
  return (
    <>
        <Title>Multiplier Component:</Title>
        <Container>
            <Expression>{value} * {value2}</Expression>
            <Result>
                <p>{value * value2}</p>
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