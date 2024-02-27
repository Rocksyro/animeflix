import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import * as API from '../../services/apiService';

export function SlideCards() {
    const [anime, setAnime] = useState({});
    useEffect(() => {
        API.getTopAnime().then(setAnime)
    }, []);

    return (    
        <div className="container">
            <div className="slide-cards" >
                {anime.data?.map((singleAnime) => (
                    <Card
                    key={singleAnime.mal_id}
                    title={singleAnime.title}
                    rating={singleAnime.rating}
                    image={singleAnime.images.jpg.image_url}
                    />
                ))} 
            </div>
        </div>
    )}


export default SlideCards;

