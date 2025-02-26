import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🤟 Sign Language Communication</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/translate">Translate</Link>
        <Link to="/video-call">Video Call</Link>
        <Link to="/more">More</Link>
      </div>
    </nav>
  );
}

export default Navbar;
