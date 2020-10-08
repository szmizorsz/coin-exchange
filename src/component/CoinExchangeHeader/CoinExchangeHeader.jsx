import React, { Component } from 'react'
import styled from 'styled-components'

const Header = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export default class CoinExchangeHeader extends Component {
    render() {
        return (
            <Header>
            <h1>
              Coin exchange
            </h1>
          </Header>
          )
    }
}
