import React, { useContext } from 'react'
import { AccountContext } from './accountContext';
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink } from './Common';
const LoginForm = () => {
    const { switchToSignUp } = useContext(AccountContext);
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" required></Input>
                <Input type="password" placeholder="Password" required></Input>
            </FormContainer>
            <MutedLink href="#" > Forgot your password?</MutedLink>
            <SubmitButton type="submit">Sign in</SubmitButton>
            <MutedLink href="#">Don't have an account? <BoldLink href="#" onClick={switchToSignUp}>Signup</BoldLink></MutedLink>
        </BoxContainer>
    )
}

export default LoginForm;