import React from 'react'
import "./Home.css";
import {Link} from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

export default function Home() {

    return (
      <div>
        <div className="caption"> 
          <h3>
            Find your dream location that is waiting for you 
          </h3>
        </div>
        <div className="mission">
          <h3> 
            &emsp;Our mission: The global pandemic has drastically decreased tourist arrivals around the world, disproportionately affecting the tourism industry in small island developing states (SIDS). How may we promote travel to SIDS to young adults to support their economic recovery?
          </h3>
        </div>

        <div className="container survey-intro">
          <div className='row'>
            <h3 className="col-6 survey-intro-text">
              Introducing dream vacation matching survey. This survey will be based on trip preferences questions such as time of travel, activities, access to wifi, etc. Once the is submitted, our website will then recommend 3 amazing destinations that best fit you.
            </h3>
            
            <Link to="/survey" className="col-6" style={{     display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none'}}>
              <button className="btn" id="survey-button" > start survey</button>
            </Link>
          </div>
        </div>

        <div className="container bg-intro">
          <div className='row'>
            <h3 className="col-6 bg-intro-col1">
              &emsp;The global Covid-19 pandemic caused fear around the world. As countries and people were trying to get control over case numbers, restrictions and protocols were put in place. As quarantine and social distancing became a new norm, traveling became a risk. Due to the new reality, the world was facing international tourism paused completely. 
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <br></br>
              During the pandemic, many SIDS states developed programs that would allow tourists who come from “low-risk” countries to visit. For example, Australia began the “Travel bubble” program to allow visitors from New Zealand to come into Australia without the required testing and quarantine time. Others came out with remote working programs where tourists were incentivized to come live on the island while they continue to work remotely. While these programs did help tourists travel in the safest form, it was not enough to bridge the gap of the lost revenue (Nadeem). Today the pandemic is in a state where people are feeling a bit more comfortable traveling. SIDS countries need to adapt to the new and rapid world where tourists are eager to travel once again.
            </h3>
            <h3 className="col-6 bg-intro-col2">
              &emsp;This problem affects small island developing states(SIDS) and their citizens. SIDS are states who face social, economic, and environmental vulnerabilities that are unique to their circumstances (un.org). The Economics of SIDS is highly integrated and dependent on the tourism industry, involving countless jobs and businesses. When the pandemic hit in the year 2020, tourism all over the world dramatically paused. This pause lasted for almost a year causing the loss of jobs in the tourism industry, disproportionately impacting women and youth. Numerous planned business expansions fell through taking away thousands of possible new jobs, significantly affecting economies all over the world. As stated in the article Wish you Were Here by Adam Behsudi “The Caribbean Hotel and Tourism Association has projected that as many as 60 percent of the 30,000 new hotel rooms that were in the planning or construction phase throughout the Caribbean region will not be completed as a result of the crisis.”(Behsudi)
            </h3>
          </div>
        </div>
      </div>
    );
}
