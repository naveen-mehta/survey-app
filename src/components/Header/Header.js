import React, { useContext } from 'react'
import {
    HeaderContainer,
    LogoText,
    LogoutBtn
} from './HeaderElements'
import { Context } from '../../Context/Context'

const Header = () => {
    const { user, setUser, setActiveSurvey, setListActive, setSurveyResults } = useContext(Context);

    const getHeader = () => {
        return (
            <>
                <HeaderContainer>        
                    <LogoText>
                        Survey App
                    </LogoText>
                    <LogoutBtn 
                        onClick={() => {
                            setUser('');
                            setActiveSurvey(0);
                            setListActive('true');
                            setSurveyResults('');
                        }}
                    >
                        Reset
                    </LogoutBtn>
                </HeaderContainer>
            </>
        )
    }
   
    return (
        <>
            {user === 'admin' ? getHeader() : ''}
        </>    
    )
}

export default Header;