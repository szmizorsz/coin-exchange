import React, { Component } from 'react'
import Coin from '../Coin/Coin';

export default class CoinList extends Component {
    render() {
        let balanceTh = null;
        if (this.props.showBalance) {
            balanceTh = <th>Balance</th>;
        }
        return (
            <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                {balanceTh}
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.coinData.map(({name, ticker, balance, price}) => 
                  <Coin key={ticker} 
                        handleRefresh={this.props.handleRefresh}
                        name={name} 
                        ticker={ticker} 
                        balance={balance}
                        price={price}
                        showBalance={this.props.showBalance}/>)
              }
            </tbody>
          </table>
        )
    }
}
