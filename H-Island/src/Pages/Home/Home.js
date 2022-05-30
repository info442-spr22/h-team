import React from 'react'
import "./Home.css";
import {Link} from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

export default function Home() {

    return (
      <div className='page-container'>
        <div className="caption row"> 
          <h3 className='col-6'> 
            Find your dream location that is waiting for you 
          </h3>
          <img className='homepic col-6' width={400} height={400} src="../Pics/p1.svg"/>
        </div>

        <div className="mission row">
          <h3 className='col-6'> 
          The global pandemic has drastically decreased tourist arrivals around the world, disproportionately affecting the tourism industry in small island developing states (SIDS).
          </h3>
          <h3 className='col-6'>
          Our mission:<br/>How may we encourage young adults travelers to explore the SIDS islands to support their economic recovery?
          </h3>
        </div>

        <div className="survey-intro row"> 
          <img className='homepic col-6' width={300} height={300} src="../Pics/p2.svg"/>
          <div className='col-6'>
            <h3>
            Introducing the dream vacation matching quiz. <br/>
            Get three magical destination recomindation based on your own prefered experiences 
            </h3>
            <Link to="/survey" className='link' style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none'}}>
                <button className="btn" id="survey-button" >Take the Quiz!</button>
              </Link>
          </div>  
        </div>

        <div className="travel row"> 
          <h3 className='col-6'>
          As quarantine and social distancing became a new norm, traveling became a risk. Due to the new reality, the world was facing international tourism paused completely. 
          </h3>
          <img className='homepic col-6' width={400} height={400} src="../Pics/p3.svg"/>
        </div>

        <div className="sids row"> 
          <img className='homepic col-6' width={400} height={400} src="../Pics/p4.svg"/>
          <div className='col-6'>
            <h3>
            What are SIDS? SIDS are states who face social, economic, and environmental vulnerabilities that are unique to their circumstances (un.org). 
            </h3>
          </div>  
        </div> 

        <div className="help row"> 
          <h3 className='col-6'>
            How can you help? <br/>
            Travel to small islands and explore their enchanting culture and views. 
          </h3>
          <img className='homepic col-6' width={400} height={400} src="../Pics/p5.svg"/>
        </div>





      </div>
    );
}
