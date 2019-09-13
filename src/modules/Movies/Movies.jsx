import React from "react";

import SearchBar from "./components/SearchBar";
import MovieList from "./components/MoviesList";

import "./Movies.scss";

class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      searchValue: '',
      isSearching: false,
    }
  }

  filterMovies = () => {
    const { searchValue } = this.state;
    const { movieList } = this.props;
    const movies = movieList.filter((movie) => {
      return movie.title.toUpperCase().includes(searchValue.toUpperCase());
    });

    this.setState({ movies, isSearching: true });
  }

  handleSearchValue = (event) => {
    event.persist();
    const value = event.target.value;
    if (value === "") {
      this.clearSearch()
    }

    this.setState({ searchValue: value });
  }

  clearSearch = () => {
    this.setState({ searchValue: '', isSearching: false });
  }

  componentDidMount = () => {
    this.props.getMoviesList();
  };

  render() {
    const { searchValue, movies, isSearching } = this.state;
    const { movieList, isLoading } = this.props;

    return (
      <section className="movies-view">
        <div className="movies-view__search">
          <SearchBar
            name="movies-search"
            value={searchValue}
            onChange={this.handleSearchValue}
            onSearch={this.filterMovies}
            onClear={this.clearSearch}
            placeholder="Búsqueda"
          />
        </div>
        <div className="movies-view__search"></div>
        <div className="movies-view__movies-list">
          <MovieList movies={isSearching ? movies : movieList} isLoading={isLoading} />
        </div>
      </section>
    );
  }
}

export default Movies;
