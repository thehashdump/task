import { Container, Expression, Result, Title } from './Multiplier';
import { useState } from 'react';

function Subtraction() {
  const value = 4
  const [ counter, setCounter ] = useState(0)
  window.addEventListener('update', () => {
    setCounter(Number(localStorage.getItem("counter")))
    })
  return (
    <>
        <Title>Subtraction Component:</Title>
        <Container>
            <Expression>
              {`${value} - ${counter}`}
            </Expression>
            <Result>
                <p>
                  {value-counter}
                </p>
            </Result>
        </Container> 
    </>    
  )
}

export default Subtraction