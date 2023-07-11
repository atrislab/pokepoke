import React, { useState } from "react";

const Search = ({ onSearch, hasSearched, onNewSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm("");
    onNewSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
        disabled={hasSearched}
      />
      <button>Go</button>
    </form>
  );
};

export default Search;


