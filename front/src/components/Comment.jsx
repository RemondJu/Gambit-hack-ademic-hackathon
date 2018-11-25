import React from 'react';

const Comment = (props) => {
  return ( 
    <div className="Comment">
      <p>{props.text}</p>
      <hr/>
    </div>
   );
}
 
export default Comment;