import { useFetch } from "../../hooks/useFetch";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { CallToActionCard } from "./CallToActionCard";

import "swiper/css";
import "swiper/css/scrollbar";
import "./CallToActionSlide.css";

import { SkeletonCard } from "./SkeletonCard";

export const Slide = () => {
  const { data, loading, error } = useFetch("https://api.jikan.moe/v4/anime");

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
          {data.data.map((el) => (
            <SwiperSlide key={el?.mal_id}>
              <CallToActionCard data={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
