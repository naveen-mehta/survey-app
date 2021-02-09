import React from 'react';
import Login from './Login';
import SurveyList from './SurveyList';
import SurveyDetails from './SurveyDetail';

const SurveyApp = () => {
    return (
        <>
            <Login />
            <SurveyList />
            <SurveyDetails />
        </>
    )
}

export default SurveyApp