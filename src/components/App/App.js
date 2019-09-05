import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import BookContainer from '../BookContainer/BookContainer';
import Login from '../Login/Login';
import { Route } from 'react-router-dom'
import './App.css';
import api from '../API/api.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      audiobooks: [],
      currentUser: ''
    }
  }

  newSearch = async (text) => {
    const audio = await api.getAudio(text)
    this.setState({audiobooks: audio})
  }

  makeNewUser = async (userInfo) => {
    await api.createNewUser(userInfo)
  }

  

  render () {
    console.log(this.state)
    const { audiobooks } = this.state
    return (
      <div>
        <Route exact path='/' render={() => <Login createNewUser={this.makeNewUser} /> } />
        <Route path='/Home'render={() =>
          <main>
            <Nav newSearch={this.newSearch} />
            <BookContainer audiobooks={audiobooks} />
          </main>
        } />
      </div>
    )
  }
}

export default App;
