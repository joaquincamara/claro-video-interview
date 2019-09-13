import React from "react";
import PropTypes from "prop-types";

import MovieCard from "modules/Movies/components/MovieCard";
import { Link } from 'react-router-dom'

import "./MoviesList.scss";

function MoviesList(props) {
  const { movies, isLoading } = props;

  const renderItems = () => {
    if (isLoading) {
      return (
        <div className="movies-list__empty-movies">
          <div className="movies-list__empty-movies__message">
            <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw movies-list__loading" />
          </div>
        </div>
      );
    } else {
      if (movies.length === 0) {
        return <div className="movies-list__empty-movies">
          <div className="movies-list__empty-movies__message">
            <i className="fa fa-frown-o" aria-hidden="true"></i>
            <p>No hay películas disponibles por el momento.</p>
          </div>
        </div>
      } else {
        let list = [];
        list = movies.map((movie, index) => {
          return <Link to={`/mexico/vcard/${movie.title.trim()}/${movie.id}`} key={index}><MovieCard movie={movie} /></Link>
        });
        list.push(<span key="empty-1" className="movies-list__movie-card-empty" />);
        list.push(<span key="empty-2" className="movies-list__movie-card-empty" />);
        list.push(<span key="empty-3" className="movies-list__movie-card-empty" />);
        list.push(<span key="empty-4" className="movies-list__movie-card-empty" />);
        list.push(<span key="empty-5" className="movies-list__movie-card-empty" />);
        return list;
      }
    }
  };

  return (
    <div className="movies-list">
      <div className="movies-list__container">{renderItems()}</div>
    </div>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
}

MoviesList.defaultProps = {
  isLoading: false,
}

export default MoviesList;
