import React from "react";
import { FiBookmark, FiPlay } from "react-icons/fi";

export const CallToActionCard = ({ data }) => {
  const { title, synopsis, images } = data;
  return (
    <div className="swiper__group">
      <div className="swiper__content">
        <h1 className="swiper__title">{title}</h1>
        <p className="swiper__synopsis">{synopsis}</p>
        <div className="swipper__btn__content">
          <button className="swiper__btn__play">
            <FiPlay /> COMENZAR A VER T1 E1
          </button>
          <button className="swiper__btn__like">
            <FiBookmark />
          </button>
        </div>
      </div>
      <img className="swiper__img" src={images.jpg.image_url} alt={title} />
    </div>
  );
};
