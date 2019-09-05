import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import BookContainer from '../BookContainer/BookContainer';
import './App.css';
import api from '../API/api.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      audiobooks: [],
    }
  }

  newSearch = async (text) => {
    const audio = await api.getAudio(text)
    this.setState({audiobooks: audio})
  }

  render () {
    console.log(this.state)
    const { audiobooks } = this.state
    return (
      <main>
        <Nav newSearch={this.newSearch}/>
        <BookContainer audiobooks={audiobooks}/>
      </main>
    )
  }
}

export default App;
