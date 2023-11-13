import React from "react";
import globe from "../../assets/globe.gif";
import { Link } from "react-router-dom";
import "../../App.css";

export const Main = () => {
  return (
    <div className="main">
      <h2 className="main-heading">Learn Geography the fun way</h2>
      <img className="globe-img" src={globe} />
      <Link className="play-btn" to="/countries">
        Play
      </Link>
    </div>
  );
};
