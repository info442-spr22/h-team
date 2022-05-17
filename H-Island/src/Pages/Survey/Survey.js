import {React, useCallback} from 'react'
import './Survey.css'
import 'survey-core/modern.min.css';

// Modern theme
import 'survey-core/modern.min.css';
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

StylesManager.applyTheme("modern");

const surveyJson = {
  pages: [{
      elements: [{
          name: "Question 1",
          title: "What time of the year would you like to visit?",
          type: "radiogroup",
          choices: [
            {value: 1, text: "September to November"},
            {value: 2, text: "December to February"},
            {value: 3, text: "March to May"},
            {value: 4, text: "June to August"}
          ],
          isRequired: true
      }]
  }, {
      elements: [{
          name: "Question 2",
          title: "How much money are you willing to spend?",
          type: "radiogroup",
          choices: [
            {value: 1, text: "My budget is tight"},
            {value: 2, text: "My vaction fund is full"}
          ],
          isRequired: true
      }],
  }, {
      elements: [{
          name: "Question 3",
          title: "What region are you most interested in visiting?",
          type: "radiogroup",
          choices: [
            {value: 1, text: "Caribbean"},
            {value: 2, text: "Pacific Ocean"},
            {value: 3, text: "Atlantic Ocean"},
            {value: 4, text: "Indian Ocean"}
          ],
          isRequired: true
      }],
  }, {
      elements: [{
          name: "Question 4",
          title: "What type of activities do you enjoy?",
          type: "radiogroup",
          choices: [
            {value: 1, text: "Low-intensity (beach-bathing, sight-seeing, etc)"},
            {value: 2, text: "Medium-intensity (biking, recreational sports, etc)"},
            {value: 3, text: "High-intensity (hiking, running, swiming, etc)"},
            {value: 4, text: "Extreme-intensity (sky-diving, cliff jumping, ziplining, etc)"}
          ],
          isRequired: true
      }],
  }, {
      elements: [{
          name: "Question 5",
          title: "What are you most interested in exploring?",
          type: "radiogroup",
          choices: [
            {value: 1, text: "Mountainous"},
            {value: 2, text: "Beaches"},
            {value: 3, text: "Lakes"},
            {value: 4, text: "City"}
          ],
      }]
  }, {
      elements: [{
        name: "Question 6",
          title: "Some countries recommend tourist to obtain specific vaccines before visiting. Are you willing to to get more vaccines to protect yourself against unfamiliar diseases?",
          type: "radiogroup",
          choices: [
            {value: 1, text: "I am willing"},
            {value: 2, text: "I am not willing"}
          ],
          isRequired: true
      }]
  }, {
      elements: [{
        name: "Question 7",
          title: "Are you vaccinated against COVID-19?",
          type: "radiogroup",
          choices: [
            {value: 1, text: "I am not vaccinated, but will get tested"},
            {value: 2, text: "I am vaccinated, but only have one dose"},
            {value: 3, text: "I am vaccinated, but with only two doses"},
            {value: 4, text: "I am fully vaccinated with all doses"}
          ],
          isRequired: true
      }]
  }, {
      elements: [{
          name: "Question 8",
          title: "What means of tranport do you prefer to use while at your travel destination?",
          type: "radiogroup",
          choices: [
            {value: 1, text: "Personal Rental Car"},
            {value: 2, text: "Rideshare services"},
            {value: 3, text: "Walking"},
            {value: 4, text: "Public Tranportaion"}
          ],
          isRequired: true
      }]
  }, {
      elements: [{
          name: "Question 9",
          title: "Do you have children (under the age of 12) traveling with you?",
          type: "radiogroup",
          choices: [
            {value: 1, text: "Yes, I have children traveling with me"},
            {value: 2, text: "No, I do not have any children traveling with me"}
          ],
          isRequired: true
      }]
  }, {
      elements: [{
          name: "Question 10",
          title: "SIDS countries, have people that speak various languages, do you have a preferance towards a language spoken at your travel destination??",
          type: "radiogroup",
          choices: [
            {value: 1, text: "I would prefer English as one of the languages"},
            {value: 2, text: "I would prefer Spanish as one of the languages"},
            {value: 3, text: "I would prefer French as one of the languages"},
            {value: 4, text: "No preferance"}
          ],
      }]
  }]
};

export default function SurveyPage() {
  const survey = new Model(surveyJson);

  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  

    return (
      <div>
        <Survey model={survey} />
      </div>
    );
}
