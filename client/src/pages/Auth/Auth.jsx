import React from 'react';
import styled from 'styled-components';
import Main from '../../components/accountBox/Main';
const AuthContainer = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const Auth = () => {
	return (
		<AuthContainer>
			<Main />
		</AuthContainer >
	);
};

export default Auth;
