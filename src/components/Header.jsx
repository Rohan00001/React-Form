import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
	const navigate = useNavigate();
	return (
		<header className='header'>
			<h1 className='logo'>React Form</h1>
			<nav>
				<ul className='nav-list'>
					<li onClick={() => navigate('/')}>Home</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
