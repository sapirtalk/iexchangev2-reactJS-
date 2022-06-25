import React, { useEffect } from 'react';
import Home from './pages/Home';
import ReactGA from 'react-ga';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import useStorageState from './Hooks/useStorageState';
import Instructions from './pages/Instructions';
import NotFound from './pages/NotFound';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACKING_ID);

function App() {
	const [ pageMove, setPageMove ] = useStorageState('pageMove', 'convertor');

	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<div>
			<Navbar setPageMove={setPageMove} />

			<Routes>
				<Route path="/home" element={<Home setPageMove={setPageMove} pageMove={pageMove} />} />
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/instructions" element={<Instructions />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
