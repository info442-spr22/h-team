import React from 'react'
import styles from './Home.css'
import {Link} from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

export default function Home() {

    return (
      <div>
        <Nav/>
        <section className={'styles.caption'}>
          Find your dream location that is waitng for you
        </section>
        <section className={'styles.mission'}>
        Our mission: The global pandemic has drastically decreased tourist arrivals around the world, disproportionately affecting the tourism industry in small island developing states (SIDS). How may we promote travel to SIDS to young adults to support their economic recovery?
        </section>
        <section className={'desciptionLeft'}>
        The global Covid-19 pandemic caused fear around the world. As countries and people were trying to get control over case numbers, restrictions and protocols were put in place. As quarantine and social distancing became a new norm, traveling became a risk. Due to the new reality, the world was facing international tourism paused completely. During the pandemic, many SIDS states developed programs that would allow tourists who come from “low-risk” countries to visit. For example, Australia began the “Travel bubble” program to allow visitors from New Zealand to come into Australia without the required testing and quarantine time. Others came out with remote working programs where tourists were incentivized to come live on the island while they continue to work remotely. While these programs did help tourists travel in the safest form, it was not enough to bridge the gap of the lost revenue (Nadeem). Today the pandemic is in a state where people are feeling a bit more comfortable traveling. SIDS countries need to adapt to the new and rapid world where tourists are eager to travel once again.
        </section>
        <section className={'desciptionRight'}>
        This problem affects small island developing states(SIDS) and their citizens. SIDS are states who face social, economic, and environmental vulnerabilities that are unique to their circumstances (un.org). The Economics of SIDS is highly integrated and dependent on the tourism industry, involving countless jobs and businesses. When the pandemic hit in the year 2020, tourism all over the world dramatically paused. This pause lasted for almost a year causing the loss of jobs in the tourism industry, disproportionately impacting women and youth. Numerous planned business expansions fell through taking away thousands of possible new jobs, significantly affecting economies all over the world. As stated in the article Wish you Were Here by Adam Behsudi “The Caribbean Hotel and Tourism Association has projected that as many as 60 percent of the 30,000 new hotel rooms that were in the planning or construction phase throughout the Caribbean region will not be completed as a result of the crisis.”(Behsudi)
        </section>
         <div className="d-flex justify-content-md-center">
          <Link to="/survey">
           <button className="btn btn-secondary"> Start Survey</button>
          </Link>
        </div>
      </div>
    );
}
