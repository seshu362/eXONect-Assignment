import React from "react";
import "./index.css";

function CityList({ state, country, setCountries }) {
  const addCity = () => {
    const cityName = prompt("Enter city name:");
    if (cityName) {
      const newCity = {
        id: Date.now(),
        name: cityName,
      };
      setCountries((prevCountries) =>
        prevCountries.map((c) =>
          c.id === country.id
            ? {
                ...c,
                states: c.states.map((s) =>
                  s.id === state.id
                    ? { ...s, cities: [...s.cities, newCity] }
                    : s
                ),
              }
            : c
        )
      );
    }
  };

  const deleteCity = (cityId) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      setCountries((prevCountries) =>
        prevCountries.map((c) =>
          c.id === country.id
            ? {
                ...c,
                states: c.states.map((s) =>
                  s.id === state.id
                    ? {
                        ...s,
                        cities: s.cities.filter((city) => city.id !== cityId),
                      }
                    : s
                ),
              }
            : c
        )
      );
    }
  };

  return (
    <div className="city-list">
      <button className="add-city-button" onClick={addCity}>
        + Add City
      </button>
      {state.cities.map((city) => (
        <div key={city.id} className="city-item">
          <p>{city.name}</p>
          <button
            className="delete-button"
            onClick={() => deleteCity(city.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default CityList;