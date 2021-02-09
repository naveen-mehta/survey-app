import React, { useContext } from 'react';
import {
    SurveyListWrapper,
    SurveyText,
    SurveyHeading,
    BeginSurvey
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
                        Product / Market Fit Survey
                    </SurveyHeading>
                    <SurveyText>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste perspiciatis vel beatae qui, asperiores praesentium dolorem natus atque optio voluptate commodi ullam eaque distinctio? Quae, corrupti veniam. Suscipit, et sint!
                        <br/><br/>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat illum mollitia architecto dolores? Minima dignissimos esse ipsa ad culpa, adipisci expedita, tempore, temporibus corporis nostrum error dolorum odit iusto aliquam?
                    </SurveyText>
                    <BeginSurvey
                        onClick={() => {
                            setListActive('false');
                            setActiveSurvey(1);
                            <Redirect to='admin/surveydetails' />
                        }}
                    >
                        Begin Survey    
                    </BeginSurvey>
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


