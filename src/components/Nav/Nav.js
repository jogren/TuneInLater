import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../actions';
import { connect } from 'react-redux';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      btnStatus: 'favorite'
    }
  }

  handleSearch(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  toggleBtnStatus = () => {
    let toggle = this.state.btnStatus === 'favorite' ? 'showAll' : 'favorite'
    this.setState({ btnStatus: toggle })
  }

  render() {
    console.log(this.state.btnStatus)
    const { currentUser, logoutUser, newSearch, fetchUserFavorites } = this.props;
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
        {this.state.btnStatus === 'favorite' && <NavLink to='/favorites'>
          <button onClick={() => fetchUserFavorites(currentUser.id)} onClick={this.toggleBtnStatus}>Favorites</button>
        </NavLink> }
        {this.state.btnStatus === 'showAll' && <NavLink to='/'>
          <button onClick={this.toggleBtnStatus}>Show All</button>
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

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(null, mapDispatchToProps)(Nav);
