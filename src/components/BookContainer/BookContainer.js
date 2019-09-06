import React from 'react';
import Book from '../Book/Book';
import './BookContainer.css';

const BookContainer = ({ audiobooks }) => {
  let audiobookList = audiobooks.map((book, index) => {
    return <Book key={index} bookName={book.bookName} author={book.author} art={book.art}/>
  })

  return (
    <section className="BookContainer_section">
      {audiobookList}
    </section>
  )

}

export default BookContainer;
