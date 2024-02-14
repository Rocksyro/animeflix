import React, { useEffect, useState } from 'react';
import { useFetch } from '../../useFetch';

const Card = () => {
  // https://api.jikan.moe/v4/anime/{id}
  const { data, loading, error } = useFetch(`https://api.jikan.moe/v4/anime/${id}`)
  const [showData, setShowData] = useState(null)
  {/*}
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/51009`)
    .then(res => {
    return res.json()
    })
    .then((data) => {
      console.log('Success:', data);
      setShowData(data)
  })
},[]);
*/}
  return (
    <div className="card">
      {/*
        <img src={ data.images.jpg.image_url} alt="Nombre-anime" />
        <h3>{data.title}</h3>
        <p>{data.rating}</p>
    */}
    </div>
  );
}

export default Card;