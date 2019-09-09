import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { logoutUser, toggleBtnStatus } from '../actions';
import { connect } from 'react-redux';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
    }
  }

  handleSearch(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  helperFunction = () => {
    const { toggleBtnStatus, toggleFavoriteBtnReducer, fetchUserFavorites, currentUser } = this.props;
    toggleBtnStatus(toggleFavoriteBtnReducer);
    fetchUserFavorites(currentUser.id);
  }

  render() {
    const { currentUser, logoutUser, newSearch, toggleFavoriteBtnReducer, toggleBtnStatus } = this.props;
    const user = currentUser.name
    return (
      <nav>
        <h1>TuneInLater</h1>
        <div>
          <input
            type="text"
            name="search"
            placeholder="Search.."
            value={this.state.search}
            onChange={e => this.handleSearch(e)}
            / >
          <button onClick={() => newSearch(this.state.search) }>Submit</button>
        </div>
        <select className="select-container">
          <option value="0">Select Genre:</option>
          <option value="1">Home</option>
          <option value="2">Comedy</option>
          <option value="3">Horror</option>
          <option value="4">Fantasy</option>
          <option value="5">Romance</option>
          <option value="6">Adventure</option>
          <option value="7">Non-Fiction</option>
        </select>
        {toggleFavoriteBtnReducer === 'favorite' && <NavLink to='/favorites' onClick={this.helperFunction}>
          <button>Favorites</button>
        </NavLink> }
        {toggleFavoriteBtnReducer === 'showAll' && <NavLink to='/' onClick={() => toggleBtnStatus(toggleFavoriteBtnReducer)}>
          <button>Show All</button>
        </NavLink>}
        <div className="Nav_login">
          <h2>Welcome, {user ? user.charAt(0).toUpperCase() + user.slice(1) : ''}</h2>
          <NavLink exact to='/login'>
            <p onClick={logoutUser} className="p-logout">Log out</p>
          </NavLink>
        </div>
      </nav>
    );
  };
}

const mapStateToProps = state => ({
  toggleFavoriteBtnReducer: state.toggleFavoriteBtnReducer
})

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
  toggleBtnStatus: (status) => dispatch(toggleBtnStatus(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
