import { Container, Expression, Result, Title } from './Multiplier';
import { useState } from 'react';

function Divider() {
  const value = 6
  const [ counter, setCounter ] = useState(0)
  window.addEventListener('update', () => {
    setCounter(Number(localStorage.getItem("counter")))
  })
  return (
    <>
        <Title>Divider Component:</Title>
        <Container>
            <Expression>
              {`${value} / ${counter}`}
            </Expression>
            <Result>
                <p>{(value/counter).toFixed(3)}</p>
            </Result>
        </Container> 
    </>    
  )
}

export default Divider