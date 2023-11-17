import React, { useState } from "react";

export const SearchBar = ({ countries, onSearch }) => {
  const [search, setSearch] = useState("");

  const filterCountries = () => {
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
    onSearch(filteredCountries);
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="search a country"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={filterCountries}>Search</button>
      </div>
    </>
  );
};
