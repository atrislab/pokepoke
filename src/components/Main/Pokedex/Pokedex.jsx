import React, { useState } from "react";
import PokeList from "./PokeList";
import Search from "./Search";

const Pokedex = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setHasSearched(true);
  };

  const handleNewSearch = () => {
    setHasSearched(false);
  };

  return (
    <div>
      <h2>Pokedex</h2>
      <Search
        onSearch={handleSearch}
        hasSearched={hasSearched}
        onNewSearch={handleNewSearch}
      />
      <PokeList searchTerm={searchTerm} hasSearched={hasSearched} />
    </div>
  );
};

export default Pokedex;
