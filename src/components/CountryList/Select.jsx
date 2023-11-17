import React from "react";

export const Select = ({ countries, onSelect }) => {
  const regions = [...new Set(countries.map((country) => country.region))];

  const filterCountries = (selectedRegion) => {
    onSelect(selectedRegion);
  };

  return (
    <select id="continents" onChange={(e) => filterCountries(e.target.value)}>
      <option value="">All</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};
