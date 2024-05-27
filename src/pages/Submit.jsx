import React from 'react';

function SuccessPage() {
	const styles = {
		body: {
			margin: 0,
			padding: 0,
			boxSizing: 'border-box',
			fontFamily: 'Arial, sans-serif',
			backgroundColor: '#f4f4f4',
			height: '100%',
		},
		successContainer: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
			backgroundColor: '#f4f4f4',
		},
		successMessage: {
			textAlign: 'center',
			padding: '20px',
			background: 'white',
			borderRadius: '8px',
			boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
		},
		successHeader: {
			color: '#007bff',
		},
		successText: {
			color: '#555',
		},
	};

	return (
		<div style={styles.successContainer}>
			<div style={styles.successMessage}>
				<h1 style={styles.successHeader}>Form Submitted Successfully!</h1>
				<p style={styles.successText}>
					Thank you for submitting the form. We have received your details.
				</p>
			</div>
		</div>
	);
}

export default SuccessPage;
