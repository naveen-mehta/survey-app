import React from 'react';
import Login from './Login';
import SurveyList from './SurveyList';
import SurveyDetails from './SurveyDetail';
import Chart from './Chart';

const SurveyApp = () => {
    return (
        <>
            <Chart />
            <Login />
            <SurveyList />
            <SurveyDetails />
        </>
    )
}

export default SurveyApp