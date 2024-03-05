import React from 'react';

import './Card.css';

function Card({ rating, title, image}) {
  return (
    <>
      <div className="card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{rating}</p>
      </div>
    </>
  )
}

export default Card;