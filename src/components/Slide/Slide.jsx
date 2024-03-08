import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "./Slide.css";

import { FiBookmark } from "react-icons/fi";
import { FiPlay } from "react-icons/fi";

import { useFetch } from "../../hooks/useFetch";

export const Slide = () => {
  const { data, loading, error } = useFetch("https://api.jikan.moe/v4/anime");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {data.data.map((el) => (
          <SwiperSlide key={el?.mal_id}>
            <div className="swiper__group">
              <h1 className="swiper__title">{el.title}</h1>
              <p className="swiper__synopsis">{el.synopsis}</p>
              <div className="swipper__btn__group">
                <button className="swiper__btn__play">
                  <FiPlay /> COMENZAR A VER T1 E1
                </button>
                <button className="swiper__btn__like">
                  <FiBookmark />
                </button>
              </div>
            </div>
            <img src={el.images.jpg.image_url} alt={el.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
