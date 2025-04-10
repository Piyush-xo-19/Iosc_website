import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-logo">IoSC</h1>

      <ul className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Team">Team</NavLink>
        <NavLink to="/Projects">Projects</NavLink>
        <NavLink to="/Blogs">Blogs</NavLink>
        <NavLink to="/Events">Events</NavLink>
        <NavLink to="/Alumini">Alumini</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
