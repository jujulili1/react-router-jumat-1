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
function BmiCalculator() {
  const [result, setresult] = useState("");
  const [bmi, setbmi] = useState({
    height: 0,
    weight: 0,
  });

  const handleChange = (event) => {
    setbmi({ ...bmi, [event.target.name]: event.target.value });
  };
  const calculate = () => {
    let result = bmi.weight / (Math.pow(bmi.height, 2) * 0.0001);
    if (result < 17.0) {
      setresult("Sangat kurus");
    } else if (result >= 17.0 && result <= 18.4) {
      setresult("Kurus");
    } else if (result > 18.4 && result <= 25.0) {
      setresult("Normal");
    } else if (result > 25.0 && result <= 27.0) {
      setresult("Gemuk");
    } else if (result > 27) {
      setresult("Sangat gemuk");
    }
  };

  return (
    <Content>
      <Div>
        <Title>BMI Calculator</Title>
        <Input
          type="text"
          name="height"
          placeholder="Height in cm"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="weight"
          placeholder="Weight in kg"
          onChange={handleChange}
        />
        <Button primary onClick={calculate}>Enter</Button>
      </Div>

      <p>{result}</p>
    </Content>
  );
}

export default BmiCalculator
