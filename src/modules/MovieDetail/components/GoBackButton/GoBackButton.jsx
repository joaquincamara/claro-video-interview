import React from "react";
import { Link } from "react-router-dom";

import "./GoBackButton.scss";

function GoBackButton() {
  const urlBack = "/mexico/movies";
  return (
    <Link className="go-back" to={urlBack}>
      <i
        className="fa fa-arrow-circle-o-left go-back__icon"
        aria-hidden="true"
      />
      <h1 className="go-back__text">Regresar</h1>
    </Link>
  );
}

export default GoBackButton;
