import React, { useContext } from 'react'
import 'survey-react/survey.css'
import * as Survey from 'survey-react'
import { surveyOneQuestions } from '../Questions/SurveyOneQuestions.js'
import { SurveyDetailsWrapper } from './SurveyElements.js'
import { Context } from '../../Context/Context'
 
const SurveyOne = () => {
    const { setSurveyResults } = useContext(Context);

    Survey
    .StylesManager
    .applyTheme("orange");
    
    let survey = new Survey.Model(surveyOneQuestions);

    survey
    .onComplete
    .add(function (result) {
        console.log("Result JSON:\n" + JSON.stringify(result.data))
        setSurveyResults(result.data);
    });

    return (
        <>
            <SurveyDetailsWrapper>
                <Survey.Survey 
                    model={survey}
                />
            </SurveyDetailsWrapper>
        </>
    )
}

export default SurveyOne;