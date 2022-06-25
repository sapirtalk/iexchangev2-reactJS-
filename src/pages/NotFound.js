import React from 'react';
import logo from '../assets/logo.png';

const NotFound = () => {
	return (
		<div>
			<h1>Sorry the page you asked for cannot be found!</h1>
			<h3>404 page not found</h3>
			<img style={{ height: '250px', width: 'auto' }} src={logo} alt="logo" />
		</div>
	);
};

export default NotFound;
