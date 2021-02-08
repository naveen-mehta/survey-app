import React, { useContext } from 'react'
import SurveyOne from '../components/Surveys/SurveyOne'
import { Context } from '../Context/Context'

const SurveyDetails = () => {
    const { activeSurvey } = useContext(Context); 

    const getSurvey = () => {
        return (
            <>
                <SurveyOne />
            </>
        )
    }

    return (
        <>
            {activeSurvey === 1 ? getSurvey() : ''};
        </>
    )
};

export default SurveyDetails;
