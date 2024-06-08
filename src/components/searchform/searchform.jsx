import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../context";
import { useNavigate } from "react-router-dom";
import "./searchform.css";

const Searchform = () => {
  const { setSearch } = useContext(AppContext);
  const inputRef = useRef("");
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = () => {
    let searchTerm = inputRef.current.value.trim();
    if (searchTerm === "") {
      return;
    }
    setSearch(searchTerm);
    navigate("/book");
  };

  const handleSearch = () => {
    handleChange(); // Trigger search when button is clicked
  };

  return (
    <div className="searchform">
      <div>
        <input
          id="searchbox"
          type="text"
          placeholder="Search by book name"
          ref={inputRef}
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchform;
