import React from 'react';
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

const LoginForm = () => {
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
                        <AdminBtn>Admin login</AdminBtn>
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

export default LoginForm;

