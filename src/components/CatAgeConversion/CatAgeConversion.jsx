import React, {useState} from 'react'

import styled from "styled-components";

const Content = styled.div`
  margin: 40px;
  text-align: center;
  font-family: 'EB Garamond', serif;
`;
const Title = styled.p`
  font-size: 22px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  text-align: center;
  padding: 7px;
  font-size: 15px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin: 5px;
`;
const Button = styled.button`
color: ${props => props.primary ? "blue" : "palevioletred"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
cursor: pointer;
`;
function CatAgeConversion() {
  const [age, setAge] = useState();
  const [result, setResult] = useState();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const calculate = () => {
    if (age === "1") {
      setResult(15);
    } else if (age === "2") {
      setResult(24);
    } else if (age >= 3) {
      setResult(24 + (age - 2) * 4);
    }
  };

    return (
      <Content>
      <Div>
        <Title>Cat Age Conversion</Title>
        <Input
          type="text"
          name="age"
          placeholder="Cat Age"
          onChange={handleChange}
        />
        <Button primary type="button" onClick={calculate}>
          Convert
        </Button>
      </Div>

    <p>{age} years cat is {result} year human</p>
    </Content>
    )
}

export default CatAgeConversion
