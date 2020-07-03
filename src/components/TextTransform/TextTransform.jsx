import React,{useState} from 'react'
import styled from "styled-components";

const Content = styled.div`
  margin: 50px;
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

function TextTransform() {
    const [result, setResult] = useState("");
    const [textInput, setTextInput] = useState("");
  
    const handleChange= (event) => {
      setTextInput(event.target.value);
    };
  
    const check = () => {
      let str = textInput;
  
      let strArray = str.split("");
      let finalStr = strArray.map((char) => {
        if (/[a-z]/.test(char)) {
          char = char.toUpperCase();
        } else {
          char = char.toLowerCase();
        }
        return char;
      });
      finalStr = finalStr.join("");
      setResult(finalStr);
    };
    return (
      <Content>
        <Div>
          <Title>Text Transform App</Title>
          <Input
            type="text"
            name="textInput"
            placeholder="Input Your Text Here"
            onChange={handleChange}
          />
          <Button primary type="button" onClick={check}>
            Transform
          </Button>
        </Div>
  
        <p>{result}</p>
      </Content>
    );
  }

export default TextTransform
