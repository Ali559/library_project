import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom'

const Auth = () => {
	return (
		<section className="authentication">
			<div className="login dark-primary-color" id="login">
				<h1 className="text-primary-color">Login to your account</h1>
				<form>
					<input className="email-input" type="email" required placeholder="example@example.com" />
					<input className="password-input" type="password" required placeholder="Enter your password" />
					<p className="divider-color">Don't have an account? <Link to="#sign-up">Sign Up</Link></p>
					<input className="dark-primary-color btn-submit" type="submit" value="Login" />
				</form>
			</div>
			<div className="sign-up default-primary-color" id="sign-up">

			</div>
		</section>
	);
};

export default Auth;
