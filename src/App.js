import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import UserWrapper from './UserWrapper';

class App extends Component {
  state = {
    userInfo: {}
  }

  componentDidMount() {
    this.handleSubmit('liviarett');
  }

  handleSubmit = (user) => {
    this.getUserInfo(user)
      .then(data => {
        this.getRepoInfo(data.reposUrl)
      })
  }

  getUserInfo = (user) => {
    return fetch(`https://api.github.com/users/${user}${this.props.credentials}`, {
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
      .then(parsedResponse => {
        const data = {
          username: parsedResponse.login,
          name: parsedResponse.name,
          blog: parsedResponse.blog,
          company: parsedResponse.company,
          memberSince: parsedResponse.created_at,
          url: parsedResponse.html_url,
          avatarUrl: parsedResponse.avatar_url,
          hireable: parsedResponse.hireable,
          numberOfRepos: parsedResponse.public_repos,
          reposUrl: parsedResponse.repos_url,
        };

        this.setState({
          userInfo: data
        })
        return data;
    })
  }

  getRepoInfo = (url) => {
    fetch(`${url}${this.props.credentials}`, {
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
        this.calculateFavouriteLanguage(data);
    })
  }

  calculateFavouriteLanguage = (data) => {
    const languages = {};
    data.forEach((repo, index) => {
      const finishedFetching = index === data.length -1;

      fetch(`${repo.languages_url}${this.props.credentials}`)
        .then(response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          }
        })
        .then(data => {
          const totals = Object.entries(data).reduce((memo, [language, characters]) => {
            if (!memo[language]) {
              memo[language] = characters;
            } else {
              memo[language] = memo[language] + characters;
            }
            return memo;
          }, languages);

          const favouriteLanguage = Object.entries(totals).reduce((favourite, [language, characters]) => {
            if (!favourite.characters || characters > favourite.characters) {
              return { language, characters };
            }
            return favourite;
          }, {})

          if (finishedFetching) {
            this.setState({
              favouriteLanguage: favouriteLanguage.language,
            })
          }
        })
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Search text='Hello World' onSubmit={this.handleSubmit} />
        <UserWrapper userInfo={{...this.state.userInfo, favouriteLanguage: this.state.favouriteLanguage }} />
      </div>
    );
  }
}

export default App;
