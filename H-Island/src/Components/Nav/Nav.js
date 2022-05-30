import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.css";

export default function Nav() {
    return (
      <header className="navbar">
        <ul className="navbar me-auto col">
          {/* <li className="nav">
            <h1> H-Islands</h1>
          </li> */}
          <NavLink className="nav" to="/" style={{ textDecoration: 'none' }}>
            <h1> H-Islands</h1>
          </NavLink>
          <li className="nav">
          <NavLink to="/survey">
            <button className="btn"> Take the Quiz!</button>
          </NavLink>
          <NavLink to="/">
            <button className="btn"> Home</button>
          </NavLink>
          </li>
        </ul>
      </header>
    );
}
