import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Expression, Title } from './Multiplier'
import { useNavigate } from 'react-router-dom'


function Counter() {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
      navigate('/',{state:{counter: value}})
    }, [value])
    
  return (
    <>
        <Title>Counter Component:</Title>
        <Container>
            <Button 
                onClick={() => {
                    setValue(prev => prev - 1)
                }}
            > 
                - 
            </Button>
                <Expression>{value}</Expression>
            <Button
                onClick={() => {
                    setValue(prev => prev + 1)
                }}
            > 
                + 
            </Button>
        </Container>
    </>
  )
}
const Container = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    border-radius: 5px;
    width: 200px;
    justify-content: space-between;
    align-items: center;
`;
const Button = styled.div`
    width: 40px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Counter