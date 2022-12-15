import { Container, Expression, Result, Title } from './Multiplier';
import { useLocation } from "react-router-dom";

function Divider() {
  const value = 6
  const location = useLocation()
  return (
    <>
        <Title>Divider Component:</Title>
        <Container>
            <Expression>
              {`${value} / ${location.state?.counter}`}
            </Expression>
            <Result>
                <p>{(value/location.state?.counter).toFixed(3)}</p>
            </Result>
        </Container> 
    </>    
  )
}

export default Divider