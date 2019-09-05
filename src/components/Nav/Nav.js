import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <h1>TuneInLater</h1>
      <form>
        <input></input>
        <button>Submit</button>
      </form>
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

export default Nav;
