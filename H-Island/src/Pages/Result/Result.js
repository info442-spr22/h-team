import React from 'react'
import './Result.css'
import island_data from "../../data/islands-1.json";

export default function Result() {
  return (
    <div>
      <h1>Recommended for you</h1>
      <div className='container row'>
        <div className='col-4'>
          <h3> Island-1</h3>
        </div>
        <div className='col-4'>
          <h3> Island-2</h3>
        </div>
        <div className='col-4'>
          <h3> Island-3</h3>
        </div>
        
      </div>
    </div>
  );
}


