import React from "react";
import '../Exercise3.css'
const ButtonFrom = (props) => {
  console.log(props.style);
  return (
    <div className="from-group">
      <button
        style={props.style}
        className={
          props.type =="btn btn-primary"
        }
        onClick={props.action}
      >
        {props.title}
      </button>
    </div>
  );
};

export default ButtonFrom;
