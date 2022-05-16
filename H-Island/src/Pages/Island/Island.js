import React from 'react';
import './Island.css'
import island_data from "../../data/islands-1.json";
import { BrowserRouter, Routes, Route, Redirect, useParams, Link } from 'react-router-dom';

function IslandCard(props) {
  const island = props.island;
  return(
    <div>
      <div className='row welcome'>
        <img src={island.image} alt={island.country+" flag"} className="col-6 main-pic"/>
        <div className='col-6'>
          <h2 className=''>Welcome to {island.country}</h2>
          <img src={island.flag} alt={island.country+" flag"} id="flag"/>
        </div>
      </div>
      <div className='row info'>
        <div className='population col-3'>
          <p className='title'>Population</p>
          <p>{island.population}</p>
        </div>
        <div className='climate col-3'>
          <p className='title'>Climate</p>
          <p>{island.climate}</p>
        </div>
        <div className='region col-3'>
          <p className='title'>Reigon</p>
          <p>{island.region}</p>
        </div>
        <div className='languages col-3'>
          <p className='title'>Languages Spoken</p>
          <p>{island.languages}</p>
        </div>
        <div className='mainAttractions col-3'>
          <p className='title'>Attractions</p>
          <p>{island.mainAttractions}</p>
        </div>
        <div className='covidStatus col-3'>
          <p className='title'>Covid Status</p>
          <p>{island.covidStatus}</p>
        </div>
        <div className='costPerDay col-3'>
          <p className='title'>Cost per Day</p>
          <p>{island.costPerDay}</p>
        </div>
        <div className='instagram col-3'>
          <p className='title'>Instagram</p>
          <p>{island.instagram}</p>
        </div>
      </div>
    </div>
  )
}

export default function Island() {
  const { country } = useParams();
  // console.log(country);
  const islandArray = island_data;
  return (
    <div>
      {islandArray.map((ele)=>{
            return <li>{ele.country}</li>

          })
      }
      <div className='card-deck'>
        {islandArray.map((ele)=>{
          if(ele.country == country) {
            return <IslandCard island={ele} key={ele.country}/>
          }})
        }
      </div>
    </div>
  );
}
