import React from 'react'
import 'survey-react/survey.css'
import * as Survey from 'survey-react'
import { surveyOneQuestions } from '../Questions/SurveyOneQuestions.js'
import { SurveyListWrapper } from './SurveyElements.js'

const SurveyOne = () => {
    let survey = new Survey.Model(surveyOneQuestions);

    survey
    .onComplete
    .add(function (result) {
        console.log("Result JSON:\n" + JSON.stringify(result.data))
    });

    return (
        <>
            <SurveyListWrapper>
                <Survey.Survey 
                    model={survey}
                />
            </SurveyListWrapper>
        </>
    )
}

export default SurveyOne;