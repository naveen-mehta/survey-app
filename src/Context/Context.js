import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {

    const [user, setUser] = useState('');
    const [listActive, setListActive] = useState('true');
    const [activeSurvey, setActiveSurvey] = useState(0);

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

    return (
        <Context.Provider 
            value={{
                user,
                setUser,
                listActive,
                setListActive,
                activeSurvey,
                setActiveSurvey    
            }}
        >
            {children}
        </Context.Provider>
    );
};

// else if (user === 'admin') {
    // window.history.replaceState(null, 'surveylist', 'admin/surveylist')
// }