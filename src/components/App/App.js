import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import BookContainer from '../BookContainer/BookContainer';
import Login from '../Login/Login';
import CardDetails from '../CardDetails/CardDetails';
import api from '../API/api.js'
import { selectCurrentUser, getAudiobooks, toggleFavoriteBook, getUserFavorites } from '../actions';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
import './App.css';

class App extends Component {

  newSearch = async (text) => {
    const audio = await api.fetchAudio(text)
    this.props.getAudiobooks(audio)
  }

  makeNewUser = async (userInfo) => {
    await api.createNewUser(userInfo)
  }

  logInUser = async (userInfo) => {
    const current = await api.logIn(userInfo)
    this.props.selectCurrentUser(current)
  }

  fetchUserFavorites = async (id) => {
    const userFavorites = await api.getAllFavorites(id);
    this.props.getUserFavorites(userFavorites);
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
    const { toggleFavoriteReducer, toggleFavoriteBook, selectCurrentUserReducer } = this.props;
    if (toggleFavoriteReducer.find(book => book.book_id === favorite.book_id)) {
      let index = toggleFavoriteReducer.map(book => book.book_id).indexOf(favorite.book_id);
      toggleFavoriteReducer.splice(index, 1);
      toggleFavoriteBook([...toggleFavoriteReducer])
      favorite.favorite = false;
      api.dBdeleteFavorite(selectCurrentUserReducer.id, favorite.book_id)
    } else {
      favorite.favorite = true;
      toggleFavoriteBook([...toggleFavoriteReducer, favorite])
      const favoriteBook = this.structureObject(favorite)
      this.postFavorite(favoriteBook, selectCurrentUserReducer.id)
    }
}

  render () {
    const { selectCurrentUserReducer, getAudiobooksReducer, toggleFavoriteReducer } = this.props;
    return (
      <div className="the-app">
        <Route exact path='/login' render={() => <Login loginUser={this.logInUser} currentUser={selectCurrentUserReducer} createNewUser={this.makeNewUser} /> } />
        <Route exact path='/' render={() =>
          <main>
            <Nav newSearch={this.newSearch} currentUser={selectCurrentUserReducer} fetchUserFavorites={this.fetchUserFavorites} />
            <BookContainer audiobooks={getAudiobooksReducer} toggleFavorite={this.toggleFavorite} />
          </main>
        } />
        <Route exact path='/favorites' render={() =>
          <main>
            <Nav newSearch={this.newSearch} currentUser={selectCurrentUserReducer} fetchUserFavorites={this.fetchUserFavorites} />
            <BookContainer audiobooks={toggleFavoriteReducer} toggleFavorite={this.toggleFavorite} />
          </main>
        } />
        <Route exact path='/details/:id' render={({ match }) => {
          let targetBook = this.props.getAudiobooksReducer.find(book => book.book_id == match.params.id);
          console.log(targetBook)
          return <CardDetails {...targetBook} />
        }} />
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
  toggleFavoriteBook: favorites => dispatch(toggleFavoriteBook(favorites)),
  getUserFavorites: (favorites) => dispatch(getUserFavorites(favorites))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
