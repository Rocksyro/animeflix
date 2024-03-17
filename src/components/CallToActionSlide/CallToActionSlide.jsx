import { useFetch } from "../../hooks/useFetch";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { CallToActionCard } from "./CallToActionCard";

import "swiper/css";
import "swiper/css/scrollbar";
import "./CallToActionSlide.css";

import { SkeletonCard } from "./SkeletonCard";

export const CallToActionSlide = () => {
  /* export const CallToActionSlide = ({ cardsData }) => {
  console.log(cardsData);
  const { data, error, loading } = cardsData; */
  const { data, loading, error } = useFetch("https://api.jikan.moe/v4/anime");

  const parseData = (data) => {
    return {
      id: data.entry?.mal_id ?? data.mal_id,
      images: data.entry?.images ?? data.images,
      title: data.entry?.title ?? data.title,
      synopsis: data.entry?.synopsis ?? data.synopsis,
    };
  };

  if (loading) return <SkeletonCard />;
  if (error) return <p>{error}</p>;
  return (
    <>
      {data && (
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {/* {data.map((el) => { */}
          {data.data.map((el) => {
            const parsedObject = parseData(el);
            return (
              <SwiperSlide key={parsedObject.id}>
                <CallToActionCard data={parsedObject} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};
