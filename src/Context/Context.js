import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {

    const [user, setUser] = useState('');
    const [listActive, setListActive] = useState('true');
    const [activeSurvey, setActiveSurvey] = useState(0);
    const [surveyResults, setSurveyResults] = useState('');

    useEffect(() => {
        let session = localStorage.getItem('session');
        if (session) {
            session = JSON.parse(session)
            setUser(session.user);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('session', JSON.stringify({ user }));
    }, [user]);

    useEffect(() => {
        if (user === '') {
            window.history.replaceState(null, 'login', '/')
        } 
    });

    useEffect(() => {
        if (activeSurvey !== 0) {
            window.history.pushState(null, '', 'admin/surveydetails')
        }
    }, [activeSurvey]);

    useEffect(() => {
        if (surveyResults) {
            setActiveSurvey(0)
        } 
    }, [surveyResults]);

    return (
        <Context.Provider 
            value={{
                user,
                setUser,
                listActive,
                setListActive,
                activeSurvey,
                setActiveSurvey,
                setSurveyResults,
                surveyResults,    
            }}
        >
            {children}
        </Context.Provider>
    );
};