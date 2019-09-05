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

  render () {
    console.log(this.state)
    return (
      <main>
        <Nav newSearch={this.newSearch}/>
        <BookContainer />
      </main>
    )
  }


// async getAudio(text) {
//   const url = `https://itunes.apple.com/search?term=${text}&media=audiobook`
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('There was an error getting your data');
//     }
//     const audiobooks = await response.json();
//     return audiobooks.results
//   } catch(error) {
//     throw new Error(error.message);
//   }
// }

newSearch = async (text) => {
  const audio = await api.getAudio(text)
  this.setState({audiobooks: audio})
}


  // async componentDidMount() {
  //   this.newSearch("")
  // }

}

export default App;
