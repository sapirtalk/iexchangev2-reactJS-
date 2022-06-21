import React from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import UserForm from './components/userForm/UserForm';
import './Home.css';
import useStorageState from './Hooks/useStorageState';
import ReactGA from 'react-ga';
import Intro from './components/intro/Intro';
import Header from './components/header/Header';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACKING_ID);

function Home() {
	const [ pageMove, setPageMove ] = useStorageState('pageMove', 'convertor');
	console.log(pageMove);

	return (
		<div className="Home">
			<Navbar setPageMove={setPageMove} />
			<div className="home-main">
				{pageMove === 'convertor' ? <Header /> : ''}
				<UserForm setPageMove={setPageMove} pageMove={pageMove} />
				{pageMove === 'convertor' ? (
					<div>
						<div className="introduction">
							<Intro />
						</div>
					</div>
				) : (
					''
				)}
			</div>
			<Footer />
		</div>
	);
}

export default Home;
