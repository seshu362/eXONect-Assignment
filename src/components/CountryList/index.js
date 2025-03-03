import React from "react";
import StateList from "../StateList";
import "./index.css";

function CountryList({ countries, setCountries }) {
  const deleteCountry = (countryId) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      setCountries(countries.filter((country) => country.id !== countryId));
    }
  };

  return (
    <div className="country-list">
      {countries.map((country) => (
        <div key={country.id} className="country-item">
          <div className="country-header">
            <h2>{country.name}</h2>
            <button
              className="delete-button"
              onClick={() => deleteCountry(country.id)}
            >
              Delete
            </button>
          </div>
          <StateList
            country={country}
            setCountries={setCountries}
          />
        </div>
      ))}
    </div>
  );
}

export default CountryList;