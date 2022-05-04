import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {

    return (
      // <header className="container-fluid top-navbar navbar sticky-top bg-secondary px-1  ">
      //     <ul className="navbar me-auto">
      //         <li className="nav">
      //             <NavLink to="/" className="navbar-brand">SoulNet</NavLink>
      //         </li>
      //         <li className="nav">
      //             <NavLink exact to="/" className="nav-link active">Home</NavLink>
      //         </li>
      //         <li className="nav">
      //             <NavLink to="/about" className="nav-link">About</NavLink>
      //         </li>
      //     </ul>
      // </header>
      <header className="container-fluid top-navbar navbar sticky-top bg-secondary px-1">
        <ul className="navbar me-auto">
          <li className="nav">
            <h1> H-Islands</h1>
          </li>
          <li className="nav">
            <p> Home </p>
          </li>
        </ul>



        <p> Mission and Explanation</p>

        <button type="button" className="btn btn-primary btn-lg"> Start Survey</button>
      </header>


    );
}
