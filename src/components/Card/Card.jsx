import React from 'react';
import { useFetch } from '../../useFetch';

const Card = () => {
  // https://api.jikan.moe/v4/anime/{id}
  const { data, loading, error } = useFetch('https://api.jikan.moe/v4/anime/51009')

  /*
  const [showData, setShowData] = useState(null) 
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/51009`)
    .then(res => {
    return res.json()
    })
    .then((data) => {
      console.log('Success:', data);
      setShowData(data)
  })
},[]); */
if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;
return (
    <div className="card">
      <img src={data.data?.images.jpg.image_url} alt="Anime Poster" />
      <h3>{data.data?.title}</h3>
      <p>{data.data?.rating}</p>

    </div>
  )
}

export default Card;