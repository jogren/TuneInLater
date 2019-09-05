import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <h1>TuneInLater</h1>
      <div>
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
      </div>
      <h2>Welcome, ~Name~</h2>
    </nav>
  );
}

export default Nav;