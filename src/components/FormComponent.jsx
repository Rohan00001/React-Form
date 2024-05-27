import React, { useEffect, useState } from 'react';
import countries from '../constants/country';
import sortByName from '../utils/sortByName';
import { useNavigate } from 'react-router-dom';

function FormComponent() {
	const [country, setCountry] = useState(countries[0]);
	const [cities, setCities] = useState(country.cities);
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState({
		errorField: '',
		errorMessage: '',
	});
	const [formData, setFormData] = useState({
		fname: '',
		lname: '',
		username: '',
		email: '',
		password: '',
		phone: '',
		pan: '',
		aadhar: '',
	});

	countries.sort(sortByName);

	const navigate = useNavigate();

	const isDisabled =
		!formData.fname ||
		!formData.lname ||
		!formData.username ||
		!formData.email ||
		!formData.password ||
		!formData.phone ||
		!formData.pan ||
		!formData.aadhar ||
		error.errorField;

	const handleCountryChange = (event) => {
		const selectedCountry = countries.find(
			(country) => country.name === event.target.value
		);
		setCountry(selectedCountry);
		const sortedCities = [...selectedCountry.cities].sort(sortByName);
		setCities(sortedCities);
		setFormData({ ...formData, country: selectedCountry.name });
	};

	const handleCityChange = (event) => {
		setFormData({ ...formData, city: event.target.value });
	};

	const handleFirstNameChange = (e) => {
		const value = e.target.value.trim();
		const regex = /^[A-Za-z]{2,50}$/;
		if (!value) {
			setError({
				errorField: 'fname',
				errorMessage: 'First Name is required',
			});
		} else if (!regex.test(value)) {
			setError({
				errorField: 'fname',
				errorMessage:
					'First Name must be 2-50 characters long and contain only letters',
			});
		} else {
			setError({
				errorField: '',
				errorMessage: '',
			});
			setFormData({ ...formData, fname: value });
		}
	};

	const handleLastNameChange = (e) => {
		const value = e.target.value.trim();
		const regex = /^[A-Za-z]{2,50}$/;
		if (!value) {
			setError({
				errorField: 'lname',
				errorMessage: 'Last Name is required',
			});
		} else if (!regex.test(value)) {
			setError({
				errorField: 'lname',
				errorMessage:
					'Last Name must be 2-50 characters long and contain only letters',
			});
		} else {
			setError({
				errorField: '',
				errorMessage: '',
			});
			setFormData({ ...formData, lname: value });
		}
	};

	const handleUsernameChange = (e) => {
		const value = e.target.value.trim();
		const regex = /^[A-Za-z0-9]{6,20}$/;
		if (!value) {
			setError({
				errorField: 'username',
				errorMessage: 'Username is required',
			});
		} else if (!regex.test(value)) {
			setError({
				errorField: 'username',
				errorMessage:
					'Username must be 6-20 characters long and contain only letters and numbers',
			});
		} else {
			setError({
				errorField: '',
				errorMessage: '',
			});
			setFormData({ ...formData, username: value });
		}
	};

	const handleEmailChange = (e) => {
		const value = e.target.value.trim();
		const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
		if (!value) {
			setError({
				errorField: 'email',
				errorMessage: 'Email is required',
			});
		} else if (!regex.test(value)) {
			setError({
				errorField: 'email',
				errorMessage: 'Invalid Email',
			});
		} else {
			setError({
				errorField: '',
				errorMessage: '',
			});
			setFormData({ ...formData, email: value });
		}
	};

	const handlePasswordChange = (e) => {
		const value = e.target.value.trim();
		const regex =
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
		if (!value) {
			setError({
				errorField: 'password',
				errorMessage: 'Password is required',
			});
		} else if (!regex.test(value)) {
			setError({
				errorField: 'password',
				errorMessage:
					'Password must be 8 characters long and contain at least one letter and one number',
			});
		} else {
			setError({
				errorField: '',
				errorMessage: '',
			});
			setFormData({ ...formData, password: value });
		}
	};

	const handlePhoneChange = (e) => {
		const value = e.target.value.trim();
		const regex = /^[0-9]{10}$/;
		if (!value) {
			setError({
				errorField: 'phone',
				errorMessage: 'Phone Number is required',
			});
		} else if (!regex.test(value)) {
			setError({
				errorField: 'phone',
				errorMessage: 'Phone Number must be 10 digits long',
			});
		} else {
			setError({
				errorField: '',
				errorMessage: '',
			});
			setFormData({ ...formData, phone: value });
		}
	};

	const handlePanChange = (e) => {
		const value = e.target.value.trim();
		const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
		if (!value) {
			setError({
				errorField: 'pan',
				errorMessage: 'PAN Number is required',
			});
		} else if (!regex.test(value)) {
			setError({
				errorField: 'pan',
				errorMessage: 'Invalid PAN Number',
			});
		} else {
			setError({
				errorField: '',
				errorMessage: '',
			});
			setFormData({ ...formData, pan: value });
		}
	};

	const handleAadharChange = (e) => {
		const value = e.target.value.trim();
		const regex = /^[2-9]{1}[0-9]{11}$/;
		if (!value) {
			setError({
				errorField: 'aadhar',
				errorMessage: 'Aadhar Number is required',
			});
		} else if (!regex.test(value)) {
			setError({
				errorField: 'aadhar',
				errorMessage: 'Invalid Aadhar Number',
			});
		} else {
			setError({
				errorField: '',
				errorMessage: '',
			});
			setFormData({ ...formData, aadhar: value });
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		if (!isDisabled) {
			alert('Form Submitted Successfully');
		}
		setTimeout(() => {
			navigate('/submitted');
		}, 3000);
	};

	useEffect(() => {
		const india = countries.find((country) => country.name === 'India');
		if (india) {
			setCountry(india);
			const sortedCities = [...india.cities].sort(sortByName);
			setCities(sortedCities);
		}
	}, []);
	return (
		<div>
			<form className='form'>
				<div className='form-group'>
					<label htmlFor='fname'>First Name : </label>
					<input
						type='text'
						id='fname'
						name='fname'
						onChange={handleFirstNameChange}
					/>
				</div>
				{error.errorField == 'fname' && (
					<p className='error'>{error.errorMessage}</p>
				)}
				<div className='form-group'>
					<label htmlFor='lname'>Last Name : </label>
					<input
						type='text'
						id='lname'
						name='lname'
						onChange={handleLastNameChange}
					/>
				</div>
				{error.errorField == 'lname' && (
					<p className='error'>{error.errorMessage}</p>
				)}
				<div className='form-group'>
					<label htmlFor='username'>Username : </label>
					<input
						type='text'
						id='username'
						name='username'
						onChange={handleUsernameChange}
					/>
				</div>
				{error.errorField == 'username' && (
					<p className='error'>{error.errorMessage}</p>
				)}
				<div className='form-group'>
					<label htmlFor='email'>Email : </label>
					<input
						type='email'
						id='email'
						name='email'
						onChange={handleEmailChange}
					/>
				</div>
				{error.errorField == 'email' && (
					<p className='error'>{error.errorMessage}</p>
				)}
				<div className='form-group'>
					<label htmlFor='password'>Password : </label>
					<div className='password'>
						<input
							className='password-input'
							type={showPassword ? 'text' : 'password'}
							id='password'
							name='password'
							onChange={handlePasswordChange}
						/>
						<div className='svg-icon'>
							{showPassword ? (
								<svg
									stroke='currentColor'
									fill='currentColor'
									strokeWidth='0'
									viewBox='0 0 1024 1024'
									height='1.5em'
									width='1.5em'
									xmlns='http://www.w3.org/2000/svg'
									onClick={() => setShowPassword(false)}
								>
									<path d='M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z'></path>
									<path d='M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z'></path>
								</svg>
							) : (
								<svg
									stroke='currentColor'
									fill='currentColor'
									strokeWidth='0'
									viewBox='0 0 1024 1024'
									height='1.5em'
									width='1.5em'
									xmlns='http://www.w3.org/2000/svg'
									onClick={() => setShowPassword(true)}
								>
									<path d='M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z'></path>
								</svg>
							)}
						</div>
					</div>
				</div>
				{error.errorField == 'password' && (
					<p className='error'>{error.errorMessage}</p>
				)}
				<div className='form-group'>
					<label htmlFor='phone'>Phone Number:</label>
					<input
						type='tel'
						id='phone'
						name='phone'
						onChange={handlePhoneChange}
					/>
				</div>
				{error.errorField == 'phone' && (
					<p className='error'>{error.errorMessage}</p>
				)}
				<div className='form-selection'>
					<div className='form-group'>
						<label htmlFor='country'>Country : </label>
						<select
							id='country'
							name='country'
							value={country.name}
							onChange={handleCountryChange}
						>
							{countries.map((country) => (
								<option
									key={country.id}
									value={country.name}
								>
									{country.name}
								</option>
							))}
						</select>
					</div>
					<div className='form-group'>
						<label htmlFor='city'>City:</label>
						<select
							id='city'
							name='city'
							onChange={handleCityChange}
						>
							{cities.map((city) => (
								<option
									key={city.id}
									value={city.name}
								>
									{city.name}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className='form-group'>
					<label htmlFor='pan'>PAN Number : </label>
					<input
						type='text'
						id='pan'
						name='pan'
						onChange={handlePanChange}
					/>
				</div>
				{error.errorField == 'pan' && (
					<p className='error'>{error.errorMessage}</p>
				)}
				<div className='form-group'>
					<label htmlFor='aadhar'>Aadhar Number : </label>
					<input
						type='text'
						id='aadhar'
						name='aadhar'
						onChange={handleAadharChange}
					/>
				</div>
				{error.errorField == 'aadhar' && (
					<p className='error'>{error.errorMessage}</p>
				)}
				<button
					type='submit'
					className={isDisabled ? 'disabled' : 'submit-btn'}
					onClick={handleSubmit}
					disabled={isDisabled}
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default FormComponent;
