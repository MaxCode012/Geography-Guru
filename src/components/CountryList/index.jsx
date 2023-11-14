import React from "react";

export const CountryCard = ({ name, flags, capital, region, population }) => {
  return (
    <div className="country-card">
      <img
        height="150px"
        src={flags.svg}
        alt={`Flag of ${name}`}
        className="country-flag"
      />
      <h2 className="country-name">{name}</h2>
      <p>
        <strong>Capital:</strong> {capital}
      </p>
      <p>
        <strong>Region:</strong> {region}
      </p>
      <p>
        <strong>Population:</strong> {population}
      </p>
    </div>
  );
};
