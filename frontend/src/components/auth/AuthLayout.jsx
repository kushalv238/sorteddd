import { useEffect } from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'

import "./../../stylesheets/auth.css";

import { useUserAuth } from '../../context/UserAuthContext';

const AuthLayout = () => {
	const navigate = useNavigate()

	const { user: authUser } = useUserAuth()

	useEffect(() => {
		if (window.location.pathname === '/auth') {
			if (authUser) {
				navigate('user')
			}
			else {
				navigate('signup');
			}
			return;
		}

		if (authUser) {
			if (
				(window.location.pathname === '/auth/login') ||
				(window.location.pathname === '/auth/signup') ||
				(window.location.pathname === '/auth/reset')
			) {
				navigate('/auth')
			}
		}
		else if (window.location.pathname === '/auth/user') {
			navigate('/auth')
		}
	})

	return (
		<div className='auth-container'>
			<Link to='/'>
				<button className='back-button'>Go back</button>
			</Link>

			<Outlet context={[authUser]} />
		</div>
	)
}

export default AuthLayout