import React, { useEffect, useState } from "react";
import axios from "axios";
import { CountryCard } from "../components/CountryList/index";
import "../components/CountryList/styles.css";
import { SearchBar } from "../components/CountryList/SearchBar";

export const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (filteredCountries) => {
    setFilteredCountries(filteredCountries);
  };

  return (
    <div className="countries-container">
      <div className="countries-header">
        <h2>Country List</h2>
        <div className="continent-select">
          <label className="label" for="continents">
            Select the continent
          </label>

          <select id="continents">
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className="country-search">
          <SearchBar countries={countries} onSearch={handleSearch} />
        </div>
      </div>

      <div className="country-list">
        {filteredCountries.length > 0
          ? filteredCountries.map((country) => (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flags={country.flags}
                capital={country.capital && country.capital[0]}
                region={country.region}
                population={country.population}
              />
            ))
          : countries.map((country) => (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flags={country.flags}
                capital={country.capital && country.capital[0]}
                region={country.region}
                population={country.population}
              />
            ))}
      </div>
    </div>
  );
};
