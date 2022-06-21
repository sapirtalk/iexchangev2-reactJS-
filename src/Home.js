import React from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import UserForm from './components/userForm/UserForm';
import './Home.css';
import SlideShow from './components/slideShow/SlideShow';
import useStorageState from './Hooks/useStorageState';
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACKING_ID);

function Home() {
	const [ pageMove, setPageMove ] = useStorageState('pageMove', 'convertor');
	console.log(pageMove);

	return (
		<div className="Home">
			<Navbar setPageMove={setPageMove} />
			{/* {pageMove === 'convertor' ? <Header /> : ''} */}
			<UserForm setPageMove={setPageMove} pageMove={pageMove} />
			{pageMove === 'convertor' ? (
				<div>
					<div className="home-slideShow">
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

export default Home;
