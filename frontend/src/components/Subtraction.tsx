import { Container, Expression, Result, Title } from './Multiplier';
import { useLocation } from "react-router-dom";

function Subtraction() {
  const value = 4
  const location = useLocation()
  return (
    <>
        <Title>Subtraction Component:</Title>
        <Container>
            <Expression>
              {`${value} - ${location.state?.counter}`}
            </Expression>
            <Result>
                <p>
                  {value-location.state?.counter}
                </p>
            </Result>
        </Container> 
    </>    
  )
}

export default Subtraction