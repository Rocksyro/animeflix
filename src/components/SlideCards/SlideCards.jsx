import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, FreeMode, Navigation } from 'swiper/modules';
import Card from '../Card/Card';
import './SlideCards.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function SlideCards({getAnime}) {
    const [anime, setAnime] = useState({});
    useEffect(() => {
        getAnime().then(setAnime)
    }, []);

    return (
        <>
            <div className="container">
                <div className='headers'>
                    <h3 className='title'>¡Aquí tienes algunos animes imprescindibles!</h3>
                    <p className='subtitle'>¿Recién llegaste al anime o buscas algo diferente? ¡Prueba con estas series!</p>
                </div>
                <Swiper
                    navigation={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[Scrollbar, FreeMode, Navigation]}
                    className="mySwiper"
                >
                    <div className="slide-cards" >
                        {anime.data?.map((singleAnime) => (
                            <SwiperSlide key={singleAnime.mal_id}>
                                <Card
                                    key={singleAnime.mal_id}
                                    title={singleAnime.title}
                                    rating={singleAnime.rating}
                                    image={singleAnime.images.jpg.image_url}
                                />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper >
            </div>
        </>
    )
}


export default SlideCards;

