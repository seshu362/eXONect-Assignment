import React, { useState } from "react";
import CountryList from "./components/CountryList";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  const addCountry = () => {
    const countryName = prompt("Enter country name:");
    if (countryName) {
      const newCountry = {
        id: Date.now(),
        name: countryName,
        states: [],
      };
      setCountries([...countries, newCountry]);
    }
  };

  return (
    <div className="app">
      <h1>Country, State, and City Management</h1>
      <button className="add-button" onClick={addCountry}>
        + Add Country
      </button>
      <CountryList countries={countries} setCountries={setCountries} />
    </div>
  );
}

export default App;