import React from 'react'
import 'survey-react/survey.css'
import * as Survey from 'survey-react'
import { surveyOneQuestions } from '../questions/surveyOneQuestions.js'

const SurveyOne = () => {
    let survey = new Survey.Model(surveyOneQuestions);

    survey
    .onComplete
    .add(function (result) {
        console.log("Result JSON:\n" + JSON.stringify(result.data))
    });

    return (
        <Survey.Survey 
            model={survey}
        />
    )
}

export default SurveyOne;