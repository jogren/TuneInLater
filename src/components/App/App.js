import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      audiobooks: []
    }
  }

  render () {
    console.log(this.state)
    return (
      <h1>Helllooooo</h1>
    )
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/search?term=adventure&media=audiobook"
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({
      audiobooks: data.results
    }))
  }

}

export default App;
