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
                                Click below to complete a survey
                            </LoginSubHeading>
                            <AdminBtn
                                onClick={() => setUser('admin')}
                            >
                                Admin login
                            </AdminBtn>
                            <LoginDesc>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil libero reprehenderit inventore totam nostrum ex sapiente minus blanditiis illo, quas dolore quos corrupti voluptate quod excepturi! In, debitis porro.
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

