import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {

    return (

      <header className="container-fluid top-navbar navbar sticky-top bg-secondary px-1">
        <ul className="navbar me-auto col">
          <li className="nav">
            <h1> H-Islands</h1>
          </li>
          <li className="nav">
            <h1> Home </h1>
          </li>
        </ul>
      </header>
    );
}
