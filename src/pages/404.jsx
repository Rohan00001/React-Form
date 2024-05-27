import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
	const [isHovered, setIsHovered] = useState(false);

	const navigate = useNavigate();

	const styles = {
		container: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
			backgroundColor: '#f4f4f4',
			textAlign: 'center',
			flexDirection: 'column',
		},
		messageBox: {
			padding: '20px',
			background: 'white',
			borderRadius: '8px',
			boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
		},
		header: {
			color: '#ff4040',
			fontSize: '48px',
			margin: '0 0 20px',
		},
		text: {
			color: '#555',
			fontSize: '18px',
		},
		link: {
			marginTop: '20px',
			padding: '10px 15px',
			backgroundColor: isHovered ? '#0056b3' : '#007bff',
			color: 'white',
			textDecoration: 'none',
			borderRadius: '4px',
			transition: 'background-color 0.3s',
		},
	};

	return (
		<div style={styles.container}>
			<div style={styles.messageBox}>
				<h1 style={styles.header}>404</h1>
				<p style={styles.text}>Page Not Found</p>
				<p
					onClick={() => navigate('/')}
					style={styles.link}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					Go to Homepage
				</p>
			</div>
		</div>
	);
}

export default NotFoundPage;
