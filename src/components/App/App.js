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

  postFavorite = async (favoriteInfo, currentUserID) => {
    await api.newFavorite(favoriteInfo, currentUserID)
  }


// bookfavorites requires: book_id (Integer), author_name (String),
// book_name VARCHAR (String), artwork_url (String), release_date (String),
// description (String), primary_genre_name (String)

  structureObject = (favorite) => {
    return {
      book_id: favorite.book_id,
      author_name: favorite.author_name,
      book_name: favorite.book_name,
      artwork_url: favorite.artwork_url,
      release_date: favorite.release_date,
      description: favorite.description,
      primary_genre_name: favorite.primary_genre_name
    }
  }


  toggleFavorite = (favorite) => {
    console.log(favorite)
    if (this.state.favorites.find(book => book.book_name === favorite.book_name)) {
      let index = this.state.favorites.indexOf(favorite);
      this.state.favorites.splice(index, 1);
      this.setState({...this.state.favorites})
      favorite["favorite"] = false;
    } else {
      favorite.favorite = true;
      this.setState({ favorites: [...this.state.favorites, favorite] });
      const favoriteBook = this.structureObject(favorite)
      this.postFavorite(favoriteBook, this.state.currentUser.id)
    }

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
