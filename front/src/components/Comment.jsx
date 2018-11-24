import React from 'react';

const Comment = (props) => {
  return ( 
    <div className="Comment">
      <p>{props.text}</p>
    </div>
   );
}
 
export default Comment;