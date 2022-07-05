import React from 'react';
import UserForm from '../components/userForm/UserForm';
import './Home.css';
import ReactGA from 'react-ga';
import Intro from '../components/intro/Intro';
import Header from '../components/header/Header';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACKING_ID);

function Home(props) {
	return (
		<div className="Home">
			<div className="home-main">
				{props.pageMove === 'convertor' ? <Header /> : ''}
				<UserForm setPageMove={props.setPageMove} pageMove={props.pageMove} />
				{props.pageMove === 'convertor' ? (
					<div>
						<div className="introduction">
							<Intro />
						</div>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	);
}

export default Home;
