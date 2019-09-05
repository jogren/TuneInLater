import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import BookContainer from '../BookContainer/BookContainer';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      audiobooks: [],
    }
  }

  render () {
    console.log(this.state)
    return (
      <main>
        <Nav />
        <BookContainer />
      </main>
    )
  }


async getAudio(category) {
  const url = `https://itunes.apple.com/search?term=${category}&media=audiobook`
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('There was an error getting your data');
    }
    const audiobooks = await response.json();
    return audiobooks.results
  } catch(error) {
    throw new Error(error.message);
  }
}


  async componentDidMount() {
    const audio = await this.getAudio("Fiction")
    this.setState({audiobooks: audio})
  }

}

export default App;
