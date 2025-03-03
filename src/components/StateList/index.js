import React from "react";
import CityList from "../CityList";
import "./index.css";

function StateList({ country, setCountries }) {
  const addState = () => {
    const stateName = prompt("Enter state name:");
    if (stateName) {
      const newState = {
        id: Date.now(),
        name: stateName,
        cities: [],
      };
      setCountries((prevCountries) =>
        prevCountries.map((c) =>
          c.id === country.id
            ? { ...c, states: [...c.states, newState] }
            : c
        )
      );
    }
  };

  const deleteState = (stateId) => {
    if (window.confirm("Are you sure you want to delete this state?")) {
      setCountries((prevCountries) =>
        prevCountries.map((c) =>
          c.id === country.id
            ? {
                ...c,
                states: c.states.filter((state) => state.id !== stateId),
              }
            : c
        )
      );
    }
  };

  return (
    <div className="state-list">
      <button className="add-state-button" onClick={addState}>
        + Add State
      </button>
      {country.states.map((state) => (
        <div key={state.id} className="state-item">
          <div className="state-header">
            <h3>{state.name}</h3>
            <button
              className="delete-button"
              onClick={() => deleteState(state.id)}
            >
              Delete
            </button>
          </div>
          <CityList
            state={state}
            country={country}
            setCountries={setCountries}
          />
        </div>
      ))}
    </div>
  );
}

export default StateList;