import React from 'react';

export function Card({rating, title, image}) {
  return (
    <div className="card">
      <img src={image} alt="Anime Poster" />
      <h3>{title}</h3>
      <p>{rating}</p>
    </div>
  )
}

export default Card;