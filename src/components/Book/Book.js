import React from 'react';
import { Link } from 'react-router-dom';
import headphones from './headphones.svg';
import headphonesActive from './headphones-active.svg'
import { connect } from 'react-redux';
import './Book.css';

const Book = ({ book_name, author_name, artwork_url, book_id, primary_genre_name, release_date, description, toggleFavorite, favorite, favoritesReducer }) => {
  let headphonesImg = favoritesReducer.find(favorite => favorite.book_id === book_id) ? headphonesActive : headphones;



  return(
    <section className="Book_section">
      <img src={artwork_url} alt={book_name} className="Book_image"/>
      <h3>{book_name}</h3>
      <p>Author(s): {author_name}</p>
      <img src={headphonesImg} alt={book_name} onClick={() => toggleFavorite({ book_name, author_name, artwork_url, book_id, description, primary_genre_name, release_date, favorite }) } className="Book_image-favorite" />
      <h6 className="Book_p-favorites">Favorite</h6>
      <Link to={`/details/${book_id}`} className="link">
        <button className="Book_button">See more Info</button>
      </Link>
    </section>
  )
}

const mapStateToProps = state => ({
  favoritesReducer: state.toggleFavoriteReducer
})

export default connect(mapStateToProps)(Book);
