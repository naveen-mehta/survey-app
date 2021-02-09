import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
`

export const LoginIntroWrapper = styled.div`
    height: 100vh;
    margin: 0 0 0 5%;
`

export const LoginFormWrapper = styled.div`
    background: #fb79187d;
    height: 100vh;
    width: 50vw;
`

export const LoginIntroContainer = styled.div`
    margin: 32vh 0;    
`

export const LoginDetailsContainer = styled.div`
    background: white;
    width: 70%;
    margin: 20vh auto;
    border-radius: 5px;
`

export const AdminBtn = styled.button`
    background: #d46400;
    border: none;
    padding: 8px 12px;
    margin: 0 0 0 5%;
    border-radius: 5px;
    color: white;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    cursor: pointer;

    &:hover {
        background: rgba(160, 100, 38, 1);
    }
`

export const LoginHeading = styled.h1`
    padding: 0 0 0 5%;
    font-size: 4rem;
    letter-spacing: 0.1rem;
    margin: 0;
    color: #61391c;
`

export const LoginSubHeading = styled.h3`
    padding: 5% 5% 5% 5%;
    font-size: 2rem;
    letter-spacing: 0.1rem;
    margin: 0;
    color: #61391c;
`

export const LoginDesc = styled.p`
    padding: 5%;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    color: #795548db;
`