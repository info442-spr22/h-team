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
          title: "Do you have children (under the age the of 12) traveling with you?",
          type: "radiogroup",
          choices: [
              { value: 1, text: "Yes, I have children traveling with me" },
              { value: 2, text: "No, I don't have children traveling with me" }
          ],
          isRequired: true
      }]
  }, {
      elements: [{
          name: "Question 2",
          title: "What time of the year would you like to visit?",
          type: "radiogroup",
          choices: [
            {value: 1, text: "September to November"},
            {value: 2, text: "December to February"},
            {value: 3, text: "March to May"},
            {value: 4, text: "June to August"}
          ],
          isRequired: true
      }],
  }, {
      elements: [{
          name: "Question 3",
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
          name: "Question 4",
          title: "What are you most interesting in exploring?",
          type: "radiogroup",
          choices: [
            {value: 1, text: "Mountanoius"},
            {value: 2, text: "Beaches"},
            {value: 3, text: "Lakes"},
            {value: 4, text: "City"}
          ],
      }],
  }, {
      elements: [{
        name: "Question 5",
          title: "How much money are you willing to spend?",
          type: "radiogroup",
          choices: [
            {value: 1, text: "My budget is tight"},
            {value: 2, text: "My vaction fund is full"}
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
        <h2> This is Survey Page </h2>
        <Survey model={survey} />
      </div>
    );
}
