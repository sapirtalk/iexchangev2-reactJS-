import React, { useEffect } from 'react';
import Home from './Home';
import ReactGA from 'react-ga';
import { Route, Routes, Navigate } from 'react-router-dom';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACKING_ID);

function App() {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	console.log(window.location.pathname + window.location.search);

	return (
		<Routes>
			<Route exact path="/home" element={<Home />} />
			<Route exact path="/" element={<Navigate to="/home" />} />
		</Routes>
	);
}

export default App;
