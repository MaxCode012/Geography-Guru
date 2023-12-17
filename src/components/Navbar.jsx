import React from "react";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="icon">
        <BsGlobeEuropeAfrica className="globe-icon" />
        <Link className="logo-link" to="/">
          <h1>Geo Guru</h1>{" "}
        </Link>
      </div>
      <div className="help-link">
        <Link className="link" to="/help">
          Help
        </Link>
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
