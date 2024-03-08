import React from "react";

import "./Card.css";

function Card({ data }) {
    const { images, title, rating } = data;
    const image = images.jpg.image_url;
    return (
        <>
            <div className="card">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{rating ?? "Sin rating"}</p>
            </div>
        </>
    );
}

export default Card;
