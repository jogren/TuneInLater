import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css';

const Book = ({ book_name, author_name, artwork_url, book_id, primary_genre_name, release_date, description, toggleFavorite, favorite }) => {

  return(
    <section className="Book_section">
      <button onClick={() => toggleFavorite({ book_name, author_name, artwork_url, book_id, description, primary_genre_name, release_date, favorite }) } className="Book_button">Star</button>
      <h3>{book_name}</h3>
      <p>{author_name}</p>
      <img src={artwork_url} alt={book_name}/>
      <Link to={`/details/${book_id}`} className="link">
        <button>See more Info</button>
      </Link>
    </section>
  )
}

export default Book;
