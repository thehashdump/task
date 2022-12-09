import axios from '../util/axiosConfig'
import { useEffect, useState } from "react";
import { Container, Expression, Result, Title } from './Multiplier';

function Divider() {
  const value = 6
  const [value2, setValue2] = useState(0);
  useEffect(() => {
    const getCounterValue = ()=>{
        try {
            setInterval(async function () {
                const res = await axios.get('/counter')
                setValue2((res.data.value))
            }, 1000);
            
        } catch (error) {
            console.log(error)
        }
    }
    getCounterValue()
  })
  return (
    <>
        <Title>Divider Component:</Title>
        <Container>
            <Expression>{value} / {value2}</Expression>
            <Result>
                <p>{(value / value2).toFixed(3)}</p>
            </Result>
        </Container> 
    </>    
  )
}

export default Divider