
import React from 'react';
import { PropTypes } from 'prop-types';

import "./SearchBar.scss";

function SearchBar(props) {
  const { value, name, type, onSearch, placeholder, onChange, onClear } = props;

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <i className="fa fa-search search-bar__button" aria-hidden="true" onClick={onSearch} />
      <i className={`fa fa-times search-bar__clear ${value !== '' ? 'show' : ''}`} aria-hidden="true" onClick={onClear} />
    </div>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.oneOf(["text", "number"]),
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  name: null,
  type: "text",
  placeholder: '',
}

export default SearchBar;
