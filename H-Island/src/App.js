import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Survey from './Pages/Survey/Survey';
import styles from './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
      </BrowserRouter>



      <footer className="bg-secondary">
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

export default App;
