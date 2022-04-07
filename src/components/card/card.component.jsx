import React from "react";
import "./card.styles.css";

const Card = ({ superhero }) => {
  const { id, name, images, biography } = superhero;

  return (
    <div className="card-container" key={id}>
      <img alt={`Superhero ${name}`} src={images.sm} />
      <div>
        <h3>{name}</h3>
        <p>{biography.publisher}</p>
      </div>
    </div>
  );
};

export default Card;
