import React from "react";
import '../Exercise3.css'
const TextAreaFrom = (props) => (
  <div className="form-group">
    <label className="form-label">{props.title}</label>
    <br />
    <textarea
      className="form-control"
      name={props.name}
      rows={props.rows}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  </div>
);

export default TextAreaFrom;
