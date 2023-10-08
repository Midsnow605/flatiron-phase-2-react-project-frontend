import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1 className="Title">Anime Lister</h1>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          {/* Add more list items as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
