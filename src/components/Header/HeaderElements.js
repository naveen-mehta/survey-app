import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background: #fde5cf;
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    z-index: 100;
`       

export const LogoText = styled.h1`
    margin: 18px 0 0 5%;
    display: inline-flex;
    align-self: right;
    color: #61391c;
`

export const LogoutBtn = styled.button`
    background: #d46400;
    border: none;
    padding: 8px 30px;
    margin: 20px 0 0 40%;
    color: white;
    border-radius: 5px;
    text-align: right;
    position: absolute;
    right: 5%;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    cursor: pointer;

    &:hover {
        background: rgba(160, 100, 38, 1);
    }
`

