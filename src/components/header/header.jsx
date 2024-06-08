import React from "react";
import { useNavigate } from "react-router-dom";
import Searchform from "../searchform/searchform";
import "./header.css";
const Header = () => {
  const navigate = useNavigate();

  const handleNavigateToShelf = () => {
    navigate("/shelf");
  };

  return (
    <div>
      <div className="header">
        <div className="nav">
          <header className="library">LIBRARY</header>
        </div>

        <div>
          <button className="btn-shelf" onClick={handleNavigateToShelf}>
            My-Shelf
          </button>
        </div>
      </div>
      <Searchform />
    </div>
  );
};

export default Header;
