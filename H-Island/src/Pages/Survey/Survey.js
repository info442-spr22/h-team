import {React, useCallback, useState} from 'react'
import './Survey.css'
import {Link} from "react-router-dom";
import 'survey-core/modern.min.css';
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import island_data from "../../data/islands.json";
import Result from '../Result/Result';

StylesManager.applyTheme("modern");

const surveyJson = {
  pages: [{
      elements: [{
          name: "timeToVisit",
          title: "What time of the year would you like to visit?",
          type: "radiogroup",
          choices: [
            {value: "March to May", text: "March to May"},
            {value: "June to August", text: "June to August"},
            {value: "September to November", text: "September to November"},
            {value: "December to February", text: "December to February"},
          ],
          isRequired: true
      }]
  }, {
      elements: [{
          name: "budget",
          title: "How much money are you willing to spend?",
          type: "radiogroup",
          choices: [
            {value: "Tight", text: "My budget is tight"},
            {value: "Full", text: "My vacation fund is full"}
          ],
          isRequired: true
      }],
  }, {
      elements: [{
          name: "region",
          title: "What region are you most interested in visiting?",
          type: "radiogroup",
          choices: [
            {value: "Caribbean", text: "Caribbean"},
            {value: "Pacific Ocean", text: "Pacific Ocean"},
            {value: "Atlantic Ocean", text: "Atlantic Ocean"},
            {value: "Indian Ocean", text: "Indian Ocean"}
          ],
          isRequired: true
      }],
  }, {
      elements: [{
          name: "activityIntensity",
          title: "What type of activities do you enjoy?",
          type: "radiogroup",
          choices: [
            {value: "Low", text: "Low-intensity (beach-bathing, sight-seeing, etc)"},
            {value: "Medium", text: "Medium-intensity (biking, recreational sports, etc)"},
            {value: "High", text: "High-intensity (hiking, running, swiming, etc)"},
            {value: "Extreme", text: "Extreme-intensity (sky-diving, cliff jumping, ziplining, etc)"}
          ],
          isRequired: true
      }],
  }, {
      elements: [{
          name: "exploration",
          title: "What are you most interested in exploring?",
          type: "radiogroup",
          choices: [
            {value: "Mountainous", text: "Mountainous"},
            {value: "Beaches", text: "Beaches"},
            {value: "Lakes", text: "Lakes"},
            {value: "City", text: "City"}
          ],
      }]
  }, {
      elements: [{
        name: "otherVaccines",
          title: "Some countries recommend tourist to obtain specific vaccines before visiting. Are you willing to to get more vaccines to protect yourself against unfamiliar diseases?",
          type: "radiogroup",
          choices: [
            {value: "Yes", text: "I am willing"},
            {value: "No", text: "I am not willing"}
          ],
          isRequired: true
      }]
  }, {
      elements: [{
        name: "covidVaxed",
          title: "Are you vaccinated against COVID-19?",
          type: "radiogroup",
          choices: [
            {value: "No", text: "I am not vaccinated but will get tested"},
            {value: "Yes", text: "I am vaccinated (one, two, or more vaccine doses"}
          ],
          isRequired: true
      }]
  }, {
      elements: [{
          name: "bestWayToGetAround",
          title: "What means of tranport do you prefer to use while at your travel destination?",
          type: "radiogroup",
          choices: [
            {value: "Car", text: "Personal Rental Car"},
            {value: "RideShare", text: "Rideshare services"},
            {value: "Walking", text: "Walking"},
            {value: "PublicTransport", text: "Public Tranportaion"}
          ],
          isRequired: true
      }]
  }, {
      elements: [{
          name: "children",
          title: "Do you have children (under the age of 12) traveling with you?",
          type: "radiogroup",
          choices: [
            {value: "Yes", text: "Yes, I have children traveling with me"},
            {value: "No", text: "No, I do not have any children traveling with me"}
          ],
          isRequired: true
      }]
  }, {
      elements: [{
          name: "languages",
          title: "SIDS countries, have people that speak various languages, do you have a preference towards a language spoken at your travel destination??",
          type: "radiogroup",
          choices: [
            {value: "English", text: "I would prefer English as one of the languages"},
            {value: "Spanish", text: "I would prefer Spanish as one of the languages"},
            {value: "French", text: "I would prefer French as one of the languages"},
            {value: "", text: "No preferance"}
          ],
      }]
  }]};





// pages: [{
//   elements: [{
//       name: "timeToVisit",
//       title: "What time of the year would you like to visit?",
//       type: "radiogroup",
//       choices: [
//         {value: "September to November", text: "September to November"},
//         {value: "December to February", text: "December to February"},
//         {value: "March to May", text: "March to May"},
//         {value: "June to August", text: "June to August"}
//       ],
//       isRequired: true
//   }]
// }, {
//   elements: [{
//       name: "budget",
//       title: "How much money are you willing to spend?",
//       type: "radiogroup",
//       choices: [
//         {value: "Tight", text: "My budget is tight"},
//         {value: "Full", text: "My vacation fund is full"}
//       ],
//       isRequired: true
//   }]
// }]};

  function PickIslands(list, criteria) {
    return list.filter(island =>
      Object.keys(criteria).every(key =>
          island[key].includes(criteria[key])
      )
    );
  }

  

export default function SurveyPage() {
  const [Showed, setShowed] = useState(false);
  const [IslandResult, setIslandResult] = useState([]);

  const survey = new Model(surveyJson);
  var islandPickedArray = [];
  
  const alertResults = useCallback((sender) => {
      islandPickedArray = PickIslands(island_data, sender.data);
      setIslandResult([...islandPickedArray])
      console.log(islandPickedArray);
      console.log(sender.data);
  }, []);
  
  survey.onComplete.add(alertResults)


    function IslandRec(){
      <h1> Hi</h1>
      console.log('Hello!');
      // const islandPickedArraytest = island_data.slice(0, 3);
      console.log(islandPickedArray)
      console.log(IslandResult)
      const islandPickedArraytest = IslandResult.slice(0,3);

      return (
        <div className='container'>
          <div className='row'> 
          {islandPickedArraytest.map((ele)=>{
              return (
                    <div className="col-4 main-pic">
                      <Link to={"/island/"+ele.country}>
                      <img src={ele.islandPic} alt={ele.country+" Island Image"}/>
                      <h4>{ele.country}</h4>
                      <h5>{ele.countryInstagram}</h5>
                      </Link>
                  </div>
                )})
          }
          </div>
        </div>
      );
    }


    return (

      <div>
        <Survey model={survey} showCompletedPage={false}/>
        {console.log(islandPickedArray)}

        <button type="submit" className='btn btn-block btn-primary col-3 show-rec' onClick={()=>setShowed(true)}>Show Recommendations</button>
        <div>
          <h1>Recommended for you</h1>
          <div className='container row'>
            </div>
            
            {Showed && <IslandRec/>}
          </div>
      </div>

    );
}

