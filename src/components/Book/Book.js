import React from 'react';
import './Book.css';

const Book = ({ bookName, author, art, toggleFavorite, favorite}) => {
  console.log(favorite)
  return(
    <section className="Book_section">
      <button onClick={() => toggleFavorite() } className="Book_button">Star</button>
      <h3>{bookName}</h3>
      <p>{author}</p>
      <img src={art}/>
    </section>
  )
}

export default Book;
