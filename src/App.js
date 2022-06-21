import React, { useEffect } from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import UserForm from './components/userForm/UserForm';
import './App.css';
import SlideShow from './components/slideShow/SlideShow';
import useStorageState from './Hooks/useStorageState';
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACKING_ID);

function App() {
	const [ pageMove, setPageMove ] = useStorageState('pageMove', 'convertor');
	console.log(pageMove);

	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	});

	return (
		<div className="App">
			<Navbar setPageMove={setPageMove} />
			{/* {pageMove === 'convertor' ? <Header /> : ''} */}
			<UserForm setPageMove={setPageMove} pageMove={pageMove} />
			{pageMove === 'convertor' ? (
				<div>
					<div className="App-slideShow">
						<SlideShow />
					</div>
				</div>
			) : (
				''
			)}
			<Footer />
		</div>
	);
}

export default App;
