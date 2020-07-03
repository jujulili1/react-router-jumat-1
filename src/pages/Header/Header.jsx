import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Navbar = styled.nav`
  display: flex;
  flex: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  border-bottom: 1px solid gray;
  background-color: pink;
`;
const NavLink = styled.div`
  margin: 30px;
  & a {
    text-decoration: none;
    color: black;
  }
`;
function Header() {
    return (
      
        <Navbar>
          <NavLink>
            <Link to="/BmiCalculator">BMI Calculator</Link>
            </NavLink>
  
            <NavLink>
          <Link to="/CatAgeConversion">Cat Age Conversion</Link>
          </NavLink>
  
          <NavLink>
          <Link to="/TextTransform">Text Transform</Link>
          </NavLink>
        </Navbar>
       
    );
  }
  
  export default Header;