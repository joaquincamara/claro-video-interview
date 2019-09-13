import React from "react";
import { PropTypes } from "prop-types";
import "./MovieTitle.scss";

function MovieTitle(props) {
  const { title } = props;
  return <h1 className="movie-title">{title}</h1>;
}

MovieTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MovieTitle;
