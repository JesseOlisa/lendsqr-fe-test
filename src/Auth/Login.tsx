import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginHero from '../assets/hero-login.png';
import Logo from '../assets/logo.png';

const userLoginInfo = {
	"userEmail": "",
	"password": "",
}
const Login = () => {
	let navigate = useNavigate();

	const [user, setUser] = useState(userLoginInfo);
	// const [errorMsg, setErrorMsg] = useState("");
	const [success, setSuccess] = useState(false)

	const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
			const {name, value} = event.target;
			setUser({...user, [name]: value})
	}

	const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
		event.preventDefault();
		// if log in is successful, do this
		setUser(userLoginInfo);
		setSuccess(true);
		console.log(user)
	}

	useEffect(() => {
	  if(success){
		navigate('/', {replace : true})
	  }
	}, [success])
	

	return (
		<section className='main--container login--container'>
			<div className='content--container'>
				{/* HERO SECTION */}
				<div className='hero--container'>
					<div className='logo--container'>
						<img
							src={Logo}
							alt='company logo'
						/>
					</div>
					<div className='hero'>
						<img
							src={LoginHero}
							alt='hero graphics'
						/>
					</div>
				</div>
				{/* FORM SECTION */}
				<div className='sign-in--container'>
					<h2>Welcome!</h2>
					<p>Enter details to login.</p>
					
					<form onSubmit={handleSubmit}>
						<label htmlFor='userEmail'>
						</label>
							<input
								type='email'
								name='userEmail'
								id='userEmail'
								placeholder='Email'
								value={user.userEmail}
								onChange={handleChange}
								autoComplete=""
							/>
						<label htmlFor='password'></label>
							<input
								type='password'
								name='password'
								id='password'
								placeholder='Password'
								value={user.password}
								onChange={handleChange}
							/>
						<a href='#'>Forgot password?</a>
						<div>
							<button className='btn'>Login</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Login;
