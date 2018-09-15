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

  handleSubmit = () => {
    this.props.onSubmit(this.state.user);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInput} ></input>
        <button onClick={this.handleSubmit}>Look for user!</button>
      </div>
    );
  }
}

export default Search;