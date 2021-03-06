import styled from 'styled-components';

export const SurveyListWrapper = styled.div`
    position: absolute;
    top: 18%;
    margin: 2% 0 0 5%;
    background: #fff;
    width: 90%;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`

export const SurveyHeading = styled.h3`
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    margin: 3% 0 0 5%;
    color: #61391c;
`

export const SurveyText = styled.p`
    margin: 2% 5%;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    color: #61391c;
`

export const BeginSurvey = styled.button`
    background: #d46400;
    border: none;
    padding: 8px 30px;
    margin: 0 5% 3% 5%;
    color: white;
    border-radius: 5px;
    text-align: right;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    cursor: pointer;

    &:hover {
        background: rgba(160, 100, 38, 1);
    }
`

export const SurveyDetailsWrapper = styled.div`
    margin: 10% 5%;
`


