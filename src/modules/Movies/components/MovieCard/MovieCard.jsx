import React from "react";
import PropTypes from "prop-types";

import "./MovieCard.scss";

function MovieCard(props) {
  const { movie } = props;
  return (
    <div
      className="movie-card"
      style={{ backgroundImage: `url(${movie.image_background})` }}
    >
      <div className="movie-card__title">
        <span>{movie.title}</span>
      </div>
      <div className="movie-card__transparent-mask" />
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
