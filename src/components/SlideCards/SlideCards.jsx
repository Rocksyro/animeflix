import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, FreeMode, Navigation } from "swiper/modules";
import Card from "../Card/Card";
import "./SlideCards.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const parseData = (data) => {
    return {
        id: data.entry?.mal_id ?? data.mal_id,
        images: data.entry?.images ?? data.images,
        title: data.entry?.title ?? data.title,
        rating: data.rating ?? null,
    };
};

export function SlideCards({ cardsData }) {
    return (
        <>
            <div className="container">
                <div className="headers">
                    <h3 className="title">¡Aquí tienes algunos animes imprescindibles!</h3>
                    <p className="subtitle">¿Recién llegaste al anime o buscas algo diferente? ¡Prueba con estas series!</p>
                </div>
                <Swiper navigation={true} slidesPerView={3} spaceBetween={30} freeMode={true} modules={[Scrollbar, FreeMode, Navigation]} className="mySwiper">
                    <div className="slide-cards">
                        {cardsData?.map((data) => {
                            const parsedObject = parseData(data);
                            return (
                                <SwiperSlide key={parsedObject.id}>
                                    <Card data={parsedObject} />
                                </SwiperSlide>
                            );
                        })}
                    </div>
                </Swiper>
            </div>
        </>
    );
}

export default SlideCards;
