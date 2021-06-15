import React, { useState } from 'react'
import styled from 'styled-components'
import LoginForm from './LoginForm.jsx';
import SignupForm from './SignUpForm.jsx'
import { motion } from 'framer-motion';
import { AccountContext } from './accountContext.js';
const BoxContainer = styled.div`
width : 34.375em;
min-height: 34.37em;
padding:1em 0;
display:flex;
flex-direction:column;
border-radius:1.18em;
background-color: #fff;
box-shadow: 0 0 0.125em rgba(15,15,15,.28);
position:relative;
overflow:hidden; 
`;

const TopContainer = styled.div`
width: 100%;
height:15.62em;
display:flex;
flex-direction:column;
justify-content:flex-end;
padding: 0 1.8em;
padding-bottom:5em;
`;
const BackDrop = styled(motion.div)`
width: 160%;
height: 34.37em;
position: absolute;
top: -25.125em;
left: -4.375em;
transform:rotate(60deg);
display: flex;
flex-direction: column;
border-radius: 50%;
background: rgb(2,0,36);
background: linear-gradient(56deg, rgba(2,0,36,1) -19%, rgba(9,9,121,1) 0%, rgba(9,9,121,1) 99%);`;


const HeaderContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
`;

const SmallText = styled.h5`
color:#fff;
font-weight:500;
font-size:.87rem;
align-self:flex-end;
z-index:4;
margin:.5em 0;
`;
const HeaderText = styled.h2`
font-size:1.875rem;
align-self:flex-end;
font-weight:800;
line-height:1.24;
color:#fff;
z-index:4;
margin:0;
`;

const InnerContainer = styled.div`
display:flex;
flex-direction:column;
width:100%;
padding:0 1.8em;
`;


const backdropVariants = {
    expanded: {
        width: '233%',
        height: '80.625em',
        borderRadius: '20%',
        transform: 'rotate(60deg)'
    },
    collapsed: {
        width: '160%',
        height: '34.375em',
        borderRadius: '50%',
        transform: 'rotate(60deg)'
    }
}

const expandingTransition = {
    type: 'spring',
    duration: 2.3,
    stiffness: 30
}

const Main = (props) => {
    const [ isExpanded, setExpanded ] = useState(false);
    const [ active, setActive ] = useState('signin');

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false)
        }, expandingTransition.duration * 1000 - 1500);
    }
    const switchToSignUp = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive('signup')
        }, 400)
    }
    const switchToSignIn = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive('signin')
        }, 400)
    }
    const contextValue = {
        switchToSignUp,
        switchToSignIn
    };
    return (
        <AccountContext.Provider value={contextValue}>
            <BoxContainer >
                <TopContainer >
                    <BackDrop
                        initial={false}
                        animate={isExpanded ? "expanded" : "collapsed"} variants={backdropVariants}
                        transition={expandingTransition}
                    />
                    {active === 'signin' && (<HeaderContainer>
                        <HeaderText>
                            Welcome Back
                        </HeaderText>
                        <SmallText>
                            Please Sign in to continue
                        </SmallText>
                    </HeaderContainer>)}
                    {active === 'signup' && (<HeaderContainer>
                        <HeaderText>
                            Create Account
                        </HeaderText>
                        <SmallText>
                            Please Sign up to continue
                        </SmallText>
                    </HeaderContainer>)}
                </TopContainer>
                <InnerContainer>
                    {active === 'signin' && <LoginForm />}
                    {active === 'signup' && <SignupForm />}
                </InnerContainer>
            </BoxContainer>
        </AccountContext.Provider>

    );
}


export default Main