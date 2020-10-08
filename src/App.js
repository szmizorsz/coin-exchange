import React from 'react';
import './App.css';
import AccountBalance from './component/AccountBalance/AccountBalance';
import CoinList from './component/CoinList/CoinList';
import CoinExchangeHeader from './component/CoinExchangeHeader/CoinExchangeHeader';

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      {
        name: "Bitcoin",
        ticker: "BTC",
        balance: 0.5,
        price: 9999.99
      },
      {
        name: "Ethereum",
        ticker: "ETH",
        balance: 32,
        price: 299.99
      },
      {
        name: "Ripple",
        ticker: "XRP",
        balance: 1000,
        price: 0.25
      }
    ]
  }
  handleRefresh = (valueChangeTicker) => {
    const newCoindData = this.state.coinData.map(function(values) {
      let newValues = { ...values };
      if (valueChangeTicker === newValues.ticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPercentage;
      }
      return newValues;
    });
    this.setState({coinData: newCoindData})
  }
  handleShowBalance = () => {
    this.setState({showBalance: !this.state.showBalance});
  }
  render() {
    return (
      <div className="App">
        <CoinExchangeHeader />
        <AccountBalance amount={this.state.balance} showBalance={this.state.showBalance} handleShowBalance={this.handleShowBalance}/> 
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} showBalance={this.state.showBalance}/>
      </div>
    );  
  }
}

export default App;
