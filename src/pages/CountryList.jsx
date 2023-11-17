import React, { useEffect, useState } from "react";
import axios from "axios";
import { CountryCard } from "../components/CountryList/index";
import "../components/CountryList/styles.css";
import { SearchBar } from "../components/CountryList/SearchBar";
import { Select } from "../components/CountryList/Select";

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

  const handleSelect = (selectedRegion) => {
    const filteredCountries = countries.filter(
      (country) => country.region === selectedRegion
    );
    setFilteredCountries(filteredCountries);
  };

  return (
    <div className="countries-container">
      <div className="countries-header">
        <h2>Country List</h2>
        <div className="continent-select">
          <label className="label" htmlFor="continents">
            Select the continent
          </label>
          <Select countries={countries} onSelect={handleSelect} />
        </div>
        <div className="country-search">
          <SearchBar countries={countries} onSearch={handleSearch} />
        </div>
      </div>

      <div className="country-list">
        {/* DO NOT CHANGE BELOW*/}
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
        {/* DO NOT CHANGE ABOVE*/}
      </div>
    </div>
  );
};
