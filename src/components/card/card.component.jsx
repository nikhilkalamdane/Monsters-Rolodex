import React from "react";
import "./card.styles.css";

const Card = ({ superhero }) => {
  const { id, name, images, biography } = superhero;

  return (
    <div className="card-container" key={id}>
      <img className="card-image" alt={`Superhero ${name}`} src={images.sm} />
      <div>
        <h3 className="name">{name}</h3>
        <p className="publisher">{biography.publisher}</p>
      </div>
    </div>
  );
};

export default Card;
