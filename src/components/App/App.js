import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import BookContainer from '../BookContainer/BookContainer';
import Login from '../Login/Login';
import api from '../API/api.js'
import { selectCurrentUser, getAudiobooks, toggleFavoriteBook } from '../actions';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      // audiobooks: [],
      // currentUser: '',
      // favorites: []
    }
  }

  newSearch = async (text) => {
    const audio = await api.fetchAudio(text)
    console.log(audio)
    this.props.getAudiobooks(audio)
    // this.setState({audiobooks: audio})
  }

  makeNewUser = async (userInfo) => {
    await api.createNewUser(userInfo)
  }

  logInUser = async (userInfo) => {
    const current = await api.logIn(userInfo)
    this.props.selectCurrentUser(current)
  }

  postFavorite = async (favoriteInfo, currentUserID) => {
    await api.newFavorite(favoriteInfo, currentUserID)
  }

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
      const { toggleFavoriteReducer, toggleFavoriteBook } = this.props;
      if (toggleFavoriteReducer.find(book => book.book_id === favorite.book_id)) {
        let index = toggleFavoriteReducer.map(book => book.book_id).indexOf(favorite.book_id);
        toggleFavoriteReducer.splice(index, 1);
        toggleFavoriteBook([...toggleFavoriteReducer])
        // this.setState({ ...this.state.favorites })
        favorite["favorite"] = false;
      } else {
        favorite.favorite = true;
        toggleFavoriteBook([...toggleFavoriteReducer, favorite])
        // this.setState({ favorites: [...this.state.favorites, favorite] });
        const favoriteBook = this.structureObject(favorite)
        this.postFavorite(favoriteBook, this.props.selectCurrentUserReducer.id)
      }
}

  render () {
    const { selectCurrentUserReducer, getAudiobooksReducer } = this.props;
    console.log('app state', this.state)
    return (
      <div>
        <Route exact path='/' render={() => <Login loginUser={this.logInUser} createNewUser={this.makeNewUser} /> } />
        <Route path='/home' render={() =>
          <main>
            <Nav newSearch={this.newSearch} currentUser={selectCurrentUserReducer} />
            <BookContainer audiobooks={getAudiobooksReducer} toggleFavorite={this.toggleFavorite} />
          </main>
        } />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selectCurrentUserReducer: state.selectCurrentUserReducer,
  getAudiobooksReducer: state.getAudiobooksReducer,
  toggleFavoriteReducer: state.toggleFavoriteReducer
})

const mapDispatchToProps = dispatch => ({
  selectCurrentUser: userObj => dispatch(selectCurrentUser(userObj)),
  getAudiobooks: audiobooks => dispatch(getAudiobooks(audiobooks)),
  toggleFavoriteBook: favorites => dispatch(toggleFavoriteBook(favorites))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);