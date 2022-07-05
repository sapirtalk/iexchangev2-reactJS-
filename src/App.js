import React, { useEffect } from 'react';
import Home from './pages/Home';
import Faq from './components/intro/introComponents/Faq';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import useStorageState from './Hooks/useStorageState';
import Instructions from './pages/Instructions';
import NotFound from './pages/NotFound';
import { analytics } from './firebaseConfig';
import { setCurrentScreen, logEvent } from 'firebase/analytics';

function App() {
	const [ pageMove, setPageMove ] = useStorageState('pageMove', 'convertor');

	useEffect(() => {
		setCurrentScreen(analytics, window.location.pathname + window.location.search);
		logEvent(analytics, 'page-view', { page_path: window.location.pathname + window.location.search });
	}, []);

	return (
		<div>
			<Navbar setPageMove={setPageMove} />

			<Routes>
				<Route path="/home" element={<Home setPageMove={setPageMove} pageMove={pageMove} />} />
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/instructions" element={<Instructions />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
