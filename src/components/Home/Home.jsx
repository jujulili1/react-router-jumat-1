import React, { Component } from 'react'

import styled from "styled-components";

const Content = styled.div`
  margin: 50px;
  text-align: center;
  font-family: 'Zilla Slab', serif;
`;

export default class Home extends Component {
    render() {
        return (
            <Content>
                <h1>Hey</h1>
                <h2>We are super exited to have you on board</h2>
            </Content>
        )
    }
}