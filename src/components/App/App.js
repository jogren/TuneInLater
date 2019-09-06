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
      currentUser: '',
      favorites: []
    }
  }

  newSearch = async (text) => {
    const audio = await api.getAudio(text)
    this.setState({audiobooks: audio})
  }

  makeNewUser = async (userInfo) => {
    await api.createNewUser(userInfo)
  }

  logInUser = async (userInfo) => {
    const current = await api.logIn(userInfo)
    this.setState({ currentUser: current})
  }

  toggleFavorite = (favorite) => {
    if (this.state.favorites.find(book => book.bookName === favorite.bookName)) {
      let index = this.state.favorites.indexOf(favorite);
      this.state.favorites.splice(index, 1);
      this.setState({...this.state.favorites})
      favorite["favorite"] = false;
    } else {
      favorite.favorite = true;
      this.setState({ favorites: [...this.state.favorites, favorite] });
    }
  //   console.log("favfirst", favorite)
  // if(!favorite.favorite) {
  //   favorite.favorite = true;
  //   this.setState({ favorites: [...this.state.favorites, favorite] });
  //   console.log('fav2', favorite)

}

  render () {
    console.log('app state', this.state)
    const { audiobooks } = this.state
    return (
      <div>
        <Route exact path='/' render={() => <Login loginUser={this.logInUser} createNewUser={this.makeNewUser} /> } />
        <Route path='/home' render={() =>
          <main>
            <Nav newSearch={this.newSearch} currentUser={this.state.currentUser} />
            <BookContainer audiobooks={audiobooks} toggleFavorite={this.toggleFavorite} />
          </main>
        } />
      </div>
    )
  }
}

export default App;
