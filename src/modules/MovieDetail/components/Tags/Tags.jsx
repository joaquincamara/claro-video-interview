import React from "react";
import "./Tags.scss";

function Tags({ text }) {
  return (
    <div className="tags">
      <span className="tags__text">{text}</span>
    </div>
  );
}

export default Tags;
