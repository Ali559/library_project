import React, { useContext } from 'react';
import { AccountContext } from './accountContext';
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink } from './Common';


const SignUpForm = () => {
    const { switchToSignIn } = useContext(AccountContext);
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="User Name" required></Input>
                <Input type="email" placeholder="Email" required></Input>
                <Input type="password" placeholder="Password" required></Input>
                <Input type="password" placeholder="Confirm Password" required></Input>
            </FormContainer>
            <SubmitButton type="submit">Sign up</SubmitButton>
            <MutedLink href="#">Already have an account? <BoldLink href="#" onClick={switchToSignIn}>Sign in</BoldLink></MutedLink>
        </BoxContainer>
    );
}


export default SignUpForm