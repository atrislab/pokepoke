import React from "react";

const Card = ({ item, onDelete }) => {
  const { name, id, sprites, types } = item;

  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <article>
      <h3>Name:{name}</h3>
      <p>Id: {id}</p>
      <img src={sprites.front_default} alt="pokepic"></img>
      {/*<p>Type: {types[0].type}</p>*/}
      <button onClick={handleDeleteClick}>X</button>
    </article>
  );
};

export default Card;
