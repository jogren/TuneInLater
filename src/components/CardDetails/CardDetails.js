import React from 'react';
import { Link } from 'react-router-dom';
import { Markup } from 'interweave';
import './CardDetails.css';

const CardDetails = ({author_name, artwork_url, book_name, description }) => {
  return (
    <section className="CardDetails_section">
      <Link to={'/'} className='back-btn'>◀ back</Link>
      <h4>{book_name}</h4>
      <p>{author_name}</p>
      <p><Markup content={description}/></p>
      <img src={artwork_url} />
    </section>
  )
}

export default CardDetails;