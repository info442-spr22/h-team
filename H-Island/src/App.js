import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Survey from './Pages/Survey/Survey';
import Nav from './Components/Nav/Nav';
import Result from './Pages/Result/Result';
import './App.css';
import {useLocation,} from 'react-router-dom';

export default function App() {
  const location = useLocation();
  return (
    <div>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/result" element={<Result />} />
        </Routes>



      <footer className="bg author">
        <span>
          Authors:
          <span> </span>
          <a className="author-names" href="mailto:Hadard@uw.edu">Hadar</a>
          <span> </span>
          <a className="author-names" href="mailto:hajmal05@uw.edu">Hannan</a>
          <span> </span>
          <a className="author-names" href="mailto:qleng@uw.edu">Louis</a>
          <span> </span>
          <a className="author-names" href="mailto:khanm7@uw.edu">Mariam</a>
        </span>
        <span> </span>
        <span>&copy; h-island 2022-2022</span>
      </footer>

    </div>
  );
}
