import React from "react";
import "./search-box.styles.css"

const SearchBox = ({className, placeholder, onChangeHandler}) => {
    return (
      <div>
        <input
          className={`search-box ${className}`}
          placeholder={placeholder}
          type="search"
          onChange={onChangeHandler}
        />
      </div>
    );
  }

export default SearchBox;
