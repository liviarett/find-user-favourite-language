import React, { Component } from 'react';

class Search extends Component {
  state = {
    user: ''
  }

  handleInput = (e) => {
    this.setState({
      user: e.target.value,
    })
  }

  handleSubmit = (e) => {
    !!e && e.preventDefault();
    this.props.onSubmit(this.state.user);
  }

  handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render() {
    return (
      <form className="search-form pure-form">
        <input type="text" onKeyPress={this.handleEnterPress} onChange={this.handleInput} ></input>
        <button className="pure-button pure-button-primary" onClick={this.handleSubmit}>Look for user!</button>
      </form>
    );
  }
}

export default Search;