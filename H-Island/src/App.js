import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Survey from './Pages/Survey/Survey';
import Nav from './Components/Nav/Nav';
import Result from './Pages/Result/Result';
import Island from './Pages/Island/Island';
import './App.css';
import {useLocation,} from 'react-router-dom';

export default function App() {
  const location = useLocation();
  return (
    <div className='page'>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/island" element={<Island/>} />
          <Route exact path="/island/:country" element={<Island/>} />
          <Route path="/result" element={<Result />} />
        </Routes>
        
      <footer className="footer">
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
        <span>&copy; H-Islands 2022-2022</span>
      </footer>
    </div>
  );
}
