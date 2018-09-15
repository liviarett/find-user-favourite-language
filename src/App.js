import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Result from './Result';

class App extends Component {
  state = {
    result: ''
  }

  getUserInfo = (user) => {
    fetch(`https://api.github.com/users/${user}?username=liviarett&password=New1Zealand2`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/vnd.github.v3+json'
      }
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        }
      })
      .then(data => {
        this.setState({
          result: data,
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Search text='Hello World' onSubmit={this.getUserInfo} />
        <Result content={this.state.result} />
      </div>
    );
  }
}

export default App;
