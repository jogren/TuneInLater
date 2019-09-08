import React from 'react';
import Book from '../Book/Book';
import './BookContainer.css';

const BookContainer = ({ audiobooks, toggleFavorite }) => {
  if(!audiobooks) {
  } else {
    let audiobookList = audiobooks.map((book, index) => {
      return <Book 
      key={index} 
      book_id={book.book_id} 
      book_name={book.book_name} 
      author_name={book.author_name} 
      artwork_url={book.artwork_url} 
      toggleFavorite={toggleFavorite} 
      favorite={book.favorite} 
      description={book.description}
      primary_genre_name={book.primary_genre_name} 
      release_date={book.release_date}/>
    })
  
    return (
      <section className="BookContainer_section">
        {audiobookList}
      </section>
    )

  }

}

export default BookContainer;
