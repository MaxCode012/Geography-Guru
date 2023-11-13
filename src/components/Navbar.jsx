import React from "react";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="icon">
        <BsGlobeEuropeAfrica className="globe-icon" />
        <h1>Countries Guru</h1>
      </div>

      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/countries">
          Countries
        </Link>
      </div>
    </nav>
  );
};
