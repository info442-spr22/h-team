import {React, useCallback} from 'react'
import './Survey.css'
import {Link} from "react-router-dom";
import 'survey-core/modern.min.css';
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import island_data from "../../data/islands.json";

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

// Multi choice version
//   pages: [{
//     elements: [{
//         name: "timeToVisit",
//         title: "What time of the year would you like to visit?",
//         type: "checkbox",
//         choices: [
//           {value: "March to May", text: "March to May"},
//           {value: "June to August", text: "June to August"},
//           {value: "September to November", text: "September to November"},
//           {value: "December to February", text: "December to February"},
//         ],
//         isRequired: true
//     }]
// }, {
//     elements: [{
//         name: "budget",
//         title: "How much money are you willing to spend?",
//         type: "radiogroup",
//         choices: [
//           {value: "Tight", text: "My budget is tight"},
//           {value: "Full", text: "My vacation fund is full"}
//         ],
//         isRequired: true
//     }],
// }, {
//     elements: [{
//         name: "region",
//         title: "What region are you most interested in visiting?",
//         type: "checkbox",
//         choices: [
//           {value: "Caribbean", text: "Caribbean"},
//           {value: "Pacific Ocean", text: "Pacific Ocean"},
//           {value: "Atlantic Ocean", text: "Atlantic Ocean"},
//           {value: "Indian Ocean", text: "Indian Ocean"}
//         ],
//         isRequired: true
//     }],
// }, {
//     elements: [{
//         name: "activityIntensity",
//         title: "What type of activities do you enjoy?",
//         type: "checkbox",
//         choices: [
//           {value: "Low", text: "Low-intensity (beach-bathing, sight-seeing, etc)"},
//           {value: "Medium", text: "Medium-intensity (biking, recreational sports, etc)"},
//           {value: "High", text: "High-intensity (hiking, running, swiming, etc)"},
//           {value: "Extreme", text: "Extreme-intensity (sky-diving, cliff jumping, ziplining, etc)"}
//         ],
//         isRequired: true
//     }],
// }, {
//     elements: [{
//         name: "exploration",
//         title: "What are you most interested in exploring?",
//         type: "checkbox",
//         choices: [
//           {value: "Mountainous", text: "Mountainous"},
//           {value: "Beaches", text: "Beaches"},
//           {value: "Lakes", text: "Lakes"},
//           {value: "City", text: "City"}
//         ],
//     }]
// }, {
//     elements: [{
//       name: "otherVaccines",
//         title: "Some countries recommend tourist to obtain specific vaccines before visiting. Are you willing to to get more vaccines to protect yourself against unfamiliar diseases?",
//         type: "radiogroup",
//         choices: [
//           {value: "Yes", text: "I am willing"},
//           {value: "No", text: "I am not willing"}
//         ],
//         isRequired: true
//     }]
// }, {
//     elements: [{
//       name: "covidVaxed",
//         title: "Are you vaccinated against COVID-19?",
//         type: "radiogroup",
//         choices: [
//           {value: "No", text: "I am not vaccinated but will get tested"},
//           {value: "Yes", text: "I am vaccinated (one, two, or more vaccine doses"}
//         ],
//         isRequired: true
//     }]
// }, {
//     elements: [{
//         name: "bestWayToGetAround",
//         title: "What means of tranport do you prefer to use while at your travel destination?",
//         type: "checkbox",
//         choices: [
//           {value: "Car", text: "Personal Rental Car"},
//           {value: "RideShare", text: "Rideshare services"},
//           {value: "Walking", text: "Walking"},
//           {value: "PublicTransport", text: "Public Tranportaion"}
//         ],
//         isRequired: true
//     }]
// }, {
//     elements: [{
//         name: "children",
//         title: "Do you have children (under the age of 12) traveling with you?",
//         type: "radiogroup",
//         choices: [
//           {value: "Yes", text: "Yes, I have children traveling with me"},
//           {value: "No", text: "No, I do not have any children traveling with me"}
//         ],
//         isRequired: true
//     }]
// }, {
//     elements: [{
//         name: "languages",
//         title: "SIDS countries, have people that speak various languages, do you have a preference towards a language spoken at your travel destination??",
//         type: "radiogroup",
//         choices: [
//           {value: "English", text: "I would prefer English as one of the languages"},
//           {value: "Spanish", text: "I would prefer Spanish as one of the languages"},
//           {value: "French", text: "I would prefer French as one of the languages"},
//           {value: "", text: "No preferance"}
//         ],
//     }]
// }]};


//   pages: [{
//     elements: [{
//         name: "timeToVisit",
//         title: "What time of the year would you like to visit?",
//         type: "radiogroup",
//         choices: [
//           {value: "September to November", text: "September to November"},
//           {value: "December to February", text: "December to February"},
//           {value: "March to May", text: "March to May"},
//           {value: "June to August", text: "June to August"}
//         ],
//         isRequired: true
//     }]
// }, {
//     elements: [{
//         name: "budget",
//         title: "How much money are you willing to spend?",
//         type: "radiogroup",
//         choices: [
//           {value: "Tight", text: "My budget is tight"},
//           {value: "Full", text: "My vacation fund is full"}
//         ],
//         isRequired: true
//     }]
//   }, {
//     elements: [{
//         name: "languages",
//         title: "SIDS countries, have people that speak various languages, do you have a preferance towards a language spoken at your travel destination??",
//         type: "radiogroup",
//         choices: [
//           {value: "English", text: "I would prefer English as one of the languages"},
//           {value: "Spanish", text: "I would prefer Spanish as one of the languages"},
//           {value: "French", text: "I would prefer French as one of the languages"},
//           {value: "Other", text: "No preferance"}
//         ],
//     }]
// }]
// };

// pages: [{
//   elements: [{
//       name: "timeToVisit",
//       title: "What time of the year would you like to visit?",
//       type: "checkbox",
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

function PickIslands(prop) {
  const surveyResult = prop
  console.log(island_data)
  console.log(surveyResult)


  function filterBy(list, criteria) {
    return list.filter(island =>
      Object.keys(criteria).every(key =>
        // {for (var keys in key) {
          island[key].includes(criteria[key][0])
        // }}
      )
    );
  }

  //Tried Multi Choice
//  function filterBy(list, criteria) {
//     return list.filter(island =>
//       Object.keys(criteria).every(key =>
//         // {for (var keys in key) {
//           criteria[key].forEach(element => {
//             island[key].includes(element)
//           })

//           // island[key].includes(criteria[key][0])
//         // }}
//       )
//     );
//   }

console.log(filterBy(island_data,surveyResult));
}





export default function SurveyPage() {
  const survey = new Model(surveyJson);

  const alertResults = useCallback((sender) => {
    const resultsArray = Object.entries(sender.data)
    const results = sender.data;


    PickIslands(results)
    alert(resultsArray);
  }, []);

  survey.onComplete.add(alertResults);

    return (
      <div className>
        <div>
          <Survey model={survey} />
        </div>
        <div className='exitButton'>
        <Link to="/" className="col-6" style={{     display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none'}}>
              <button className="btn" id="Exit Survey Button" > Exit</button>
            </Link>
        </div>
      </div>
    );
}


//{"Question 1":"September to November","Question 2":"Full","Question 3":"Indian Ocean","Question 4":"High","Question 5":"Beaches","Question 6":"No","Question 7":2,"Question 8":"Walking","Question 9":"No","Question 10":"French"}