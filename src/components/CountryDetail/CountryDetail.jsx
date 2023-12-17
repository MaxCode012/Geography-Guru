import React from "react";
import "./CountryDetail.css";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const CountryDetail = ({ country, onClose }) => {
  const population = country.population || "N/A";
  console.log(country);
  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="country-detail">
        <button className="close-btn" onClick={onClose}>
          <IoIosCloseCircle />
        </button>
        <h3>{country.name.common}</h3>
        <img
          className="flag-img"
          src={country.flags.png}
          alt={country.name.common}
        />
        <p>{country.description}</p>
        <p>{`${country.area} km²`}</p>
        <p>Population: {population}</p>
        <p>Region: {country.region || "N/A"}</p>
        <p>
          Capital:{" "}
          {country.capital && country.capital[0] ? country.capital[0] : "N/A"}
        </p>
        {country.currencies && country.currencies.XOF && (
          <p>Currency: {country.currencies.XOF.name}</p>
        )}

        <p>
          More info on{" "}
          <Link
            target="_blank"
            to={`https://en.wikipedia.org/wiki/${country.name.common}`}
          >
            More info
          </Link>
        </p>
      </div>
    </>
  );
};

export default CountryDetail;
