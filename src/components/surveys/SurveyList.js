import React, { useContext } from 'react';
import {
    SurveyListWrapper,
    SurveyText,
    SurveyHeading
} from './SurveyElements';
import { Context } from '../../Context/Context';
import { Redirect } from 'react-router-dom';


const List = () => {
    const { user, listActive, setListActive, setActiveSurvey } = useContext(Context)
    
    const getList = () => {
        return (
            <>
                <SurveyListWrapper>
                    <SurveyHeading>
                        Click below to complete a survey
                    </SurveyHeading>
                    <SurveyText 
                        onClick={() => {
                            setListActive('false');
                            setActiveSurvey(1);
                            <Redirect to='admin/surveydetails' />
                        }}
                    >
                        Product Marketing Fit Survey
                    </SurveyText>
                </SurveyListWrapper>
            </>
        )
    }

    return (
        <>
            {user === 'admin' && listActive === 'true' ? getList() : ''}
        </>
    );
};

export default List;


