import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      search: ""
    }
  }

  handleSearch(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    let userName = this.props.currentUser;
    console.log(userName);
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
          <button onClick={() => this.props.newSearch(this.state.search) }>Submit</button>
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
        <h2>Welcome, {userName}</h2>
      </nav>
    );
  };
}

export default Nav;