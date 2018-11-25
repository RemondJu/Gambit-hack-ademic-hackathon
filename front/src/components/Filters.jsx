import React from 'react';
import '../css/Filters.css'

const Filters = (props) => {
  return (
    <div className="Filters">
      <div className="categoryFilters">
        <button onClick={props.resetFilter}>All</button>
        <button onClick={props.filterChoice} value="Ecology">Ecology</button>
        <button onClick={props.filterChoice} value="Technology">Culture</button>
        <button onClick={props.filterChoice} value="health">Health</button>
        <button onClick={props.filterChoice} value="DIY">Sports</button>
        <button onClick={props.filterChoice} value="Gastronomy">Gastronomy</button>
        <button onClick={props.filterChoice} value="Culture">Education</button>
      </div>
      <div className="rangeFilter">
        <span>Projects distances : {props.rangeFilter} km</span><br/>  
        <input type="range" min="10" max="100" step="10" value={props.rangeFilter} onChange={props.rangeChoice}/>
      </div>
      
    </div>
   );
}
 
export default Filters;