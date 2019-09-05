import React, { Component } from 'react';
import './Nav.css';
import api from '../API/api.js'

class Nav extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      search: ""
    }
  }

handleSearch(e){
  this.setState({[e.target.name]: e.target.value})
}


  render() {
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
      <ul>
        <li>Home</li>
        <li>Comedy</li>
        <li>Horror</li>
        <li>Fantasy</li>
        <li>Romance</li>
        <li>Adventure</li>
        <li>Non-Fiction</li>
      </ul>
      <h2>Welcome, ~Name~</h2>
    </nav>
  );
}
}

export default Nav;
