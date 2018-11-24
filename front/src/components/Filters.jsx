import React from 'react';
import '../css/Filters.css'

const Filters = (props) => {
  return (
    <div className="Filters">
      <div className="categoryFilters">
        <button onClick={props.resetFilter}>All</button>
        <button onClick={props.filterChoice} value="ecology">Ecology</button>
        <button onClick={props.filterChoice} value="sports">Sports</button>
        <button onClick={props.filterChoice} value="gastronomy">Gastronomy</button>
        <button onClick={props.filterChoice} value="culture">Culture</button>
        <button onClick={props.filterChoice} value="health">Health</button>
        <button onClick={props.filterChoice} value="education">Education</button>
      </div>
      <div className="rangeFilter">
        <span>Projects distances : {props.rangeFilter} km</span><br/>  
        <input type="range" min="10" max="100" step="10" value={props.rangeFilter} onChange={props.rangeChoice}/>
      </div>
      
    </div>
   );
}
 
export default Filters;