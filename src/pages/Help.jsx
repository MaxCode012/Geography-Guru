import React from "react";
import "../components/Help/help.css";
import Contact from "../components/Help/Contact";

function Help() {
  return (
    <div className="help-page">
      <div className="help-section">
        <h1>How to Use</h1>
        <p>
          Welcome to the application! Here's a quick guide on how to use it:
        </p>

        <h2 className="tip">Step 1: Explore the Country List</h2>
        <p>
          Navigate to the "Country List" page to explore a list of countries.
          You can filter the countries by continent and search for a specific
          country.
        </p>

        <h2 className="tip">Step 2: View Country Details</h2>
        <p>
          Click on a country card to view detailed information about that
          country. The detailed information includes the country's name, flag,
          description, population, region, and more.
        </p>

        <h2 className="tip">Step 3: Close Country Details</h2>
        <p>
          To close the detailed view, click the close button or anywhere outside
          the detailed view.
        </p>
      </div>
      <div className="contact-section">
        <Contact />
      </div>
    </div>
  );
}

export default Help;
