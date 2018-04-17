import React, { Component } from 'react';
import SocialCard from './SocialCard';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardProps: [],
      error: null
    };
  }

  //populate the data in here after the component loads
  componentDidMount() {
    fetch('/data/posts.json')
      .then(response => response.json())
      .then(data => this.setState({cardProps: data}))
      .catch(error => this.setState({error}))
  }

  render() {
    return (
      <div className="App">
        { this.state.error && <p>{ this.state.error.message }</p> }

        {
          this.state.cardProps.map(cardPropObj => <SocialCard { ...cardPropObj} />)
        }
      </div>
    );
  }
}

export default App;
