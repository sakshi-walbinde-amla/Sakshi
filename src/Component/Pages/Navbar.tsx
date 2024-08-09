import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <li>home1</li>
        </Link>
        <Link to="/login">
          <li>home2</li>
        </Link>
        <Link to="/about">
          <li>home3</li>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
