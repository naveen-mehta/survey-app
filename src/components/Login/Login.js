import React, { useContext } from 'react';
import { 
    LoginIntroWrapper,
    LoginFormWrapper,
    LoginContainer,
    LoginHeading,
    LoginDesc,
    LoginSubHeading,
    LoginDetailsContainer,
    LoginIntroContainer,
    AdminBtn,
    ClientBtn
} from './LoginElements';
import { Context } from '../../Context/Context'

const LoginForm = () => {
    const { user, setUser } = useContext(Context);
    
    const getLoginForm = () => {
        return (
            <>
                <LoginContainer>
                    <LoginIntroWrapper>
                        <LoginIntroContainer>
                            <LoginHeading>
                                Survey App
                            </LoginHeading>
                            <LoginDesc>
                                Designed & Built by Naveen Mehta
                            </LoginDesc>
                        </LoginIntroContainer>
                    </LoginIntroWrapper>
                    <LoginFormWrapper>
                        <LoginDetailsContainer>
                            <LoginSubHeading>
                                Login below
                            </LoginSubHeading>
                            <AdminBtn
                                onClick={() => setUser('admin')}
                            >
                                Admin login
                            </AdminBtn>
                            <LoginDesc>
                                Admins have access to available surveys and reports
                            </LoginDesc>
                            <ClientBtn>Client login</ClientBtn>
                            <LoginDesc>
                                Use client login to complete a survey
                            </LoginDesc>
                        </LoginDetailsContainer>
                    </LoginFormWrapper>
                </LoginContainer>
            </>    
        )
    }

    return (
        <>
            {user === '' ? getLoginForm() : ''}
        </>    
    )    
} 

export default LoginForm;

