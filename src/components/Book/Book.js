import React from 'react';
import './Book.css';

const Book = ({ bookName, author, art, toggleFavorite, favorite}) => {

  return(
    <section className="Book_section">
      <button onClick={() => toggleFavorite({ bookName, author, art, favorite}) } className="Book_button">Star</button>
      <h3>{bookName}</h3>
      <p>{author}</p>
      <img src={art}/>
    </section>
  )
}

export default Book;
