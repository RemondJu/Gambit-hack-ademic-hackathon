import React from 'react';
import '../css/Filters.css'

const Filters = (props) => {
  return ( 
    <div className="Filters">
      <button onClick={props.filterChoice} value="">All</button>
      <button onClick={props.filterChoice} value="ecology">Ecology</button>
      <button onClick={props.filterChoice} value="sports">Sports</button>
      <button onClick={props.filterChoice} value="gastronomy">Gastronomy</button>
      <button onClick={props.filterChoice} value="culture">Culture</button>
      <button onClick={props.filterChoice} value="health">Health</button>
      <button onClick={props.filterChoice} value="education">Education</button>
    </div>
   );
}
 
export default Filters;