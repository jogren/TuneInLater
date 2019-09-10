import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css';

const Book = ({ book_name, author_name, artwork_url, book_id, primary_genre_name, release_date, description, toggleFavorite, favorite }) => {

  return(
    <section className="Book_section">
      <img src={artwork_url} alt={book_name}/>
      <h3>{book_name}</h3>
      <p>Author(s): {author_name}</p>
      <button onClick={() => toggleFavorite({ book_name, author_name, artwork_url, book_id, description, primary_genre_name, release_date, favorite }) } className="Book_button">Star</button>
      <Link to={`/details/${book_id}`} className="link">
        <button>See more Info</button>
      </Link>
    </section>
  )
}

export default Book;
