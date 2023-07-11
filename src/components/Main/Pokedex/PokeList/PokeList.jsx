import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const PokeList = ({ searchTerm }) => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        const result = await axios(
          `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
        );
        setPokemonData((prevData) => [...prevData, result.data]);
      }
    };
    fetchData();
  }, [searchTerm]);

  const handleDelete = (id) => {
    setPokemonData((prevData) =>
      prevData.filter((pokemon) => pokemon.id !== id)
    );
  };

  return (
    <section>
      <h2>PokeList</h2>
      {pokemonData.map((pokemon) => (
        <Card key={pokemon.id} item={pokemon} onDelete={handleDelete} />
      ))}
    </section>
  );
};

export default PokeList;

