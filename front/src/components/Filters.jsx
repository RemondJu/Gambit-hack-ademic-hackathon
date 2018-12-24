import React from "react";
import "../css/Filters.css";

const Filters = props => {
  return (
    <div className="Filters">
      <div className="categoryFilters">
        <button className="filter-first" onClick={props.resetFilter}>
          All
        </button>
        <button
          className="filter-second"
          onClick={props.filterChoice}
          value="Ecology"
        >
          Ecology
        </button>
        <button
          className="filter-third"
          onClick={props.filterChoice}
          value="Technology"
        >
          Culture
        </button>
        <button
          className="filter-fourth"
          onClick={props.filterChoice}
          value="health"
        >
          Health
        </button>
        <button
          className="filter-fifth"
          onClick={props.filterChoice}
          value="DIY"
        >
          Sports
        </button>
        <button
          className="filter-sixth"
          onClick={props.filterChoice}
          value="Gastronomy"
        >
          Gastronomy
        </button>
        <button
          className="filter-seventh"
          onClick={props.filterChoice}
          value="Culture"
        >
          Education
        </button>
      </div>
      <div className="rangeFilter">
        <span>Projects distances : {props.rangeFilter} km</span>
        <br />
        <input
          className="filter-range"
          type="range"
          min="10"
          max="100"
          step="10"
          value={props.rangeFilter}
          onChange={props.rangeChoice}
        />
      </div>
    </div>
  );
};
export default Filters;
