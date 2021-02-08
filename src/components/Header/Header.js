import React, { useContext } from 'react'
import {
    HeaderContainer,
    LogoText,
    LogoutBtn
} from './HeaderElements'
import { Context } from '../../Context/Context'

const Header = () => {
    const { user, setUser } = useContext(Context);

    const getHeader = () => {
        return (
            <>
                <HeaderContainer>        
                    <LogoText>
                        Survey App
                    </LogoText>
                    <LogoutBtn 
                        onClick={() => setUser('')}
                    >
                        Logout
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