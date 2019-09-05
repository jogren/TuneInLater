import React from 'react';
import './Book.css';

const Book = ({ bookName, author, art }) => {

  return(
    <section>
      <img src={art}/>
      <h3>{bookName}</h3>
      <p>{author}</p>
    </section>
  )
}

export default Book;