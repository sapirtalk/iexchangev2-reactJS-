import React, { useEffect } from 'react';
import Home from './Home';
import ReactGA from 'react-ga';
import { Route, Routes } from 'react-router-dom';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACKING_ID);

function App() {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
}

export default App;
