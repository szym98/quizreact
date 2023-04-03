import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        Intuitive Quiz App
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
