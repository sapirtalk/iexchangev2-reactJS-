import React, { useState } from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import UserForm from './components/userForm/UserForm';
import './App.css';
import Header from './components/header/Header';
import SlideShow from './components/slideShow/SlideShow';

function App() {
	const [ pageMove, setPageMove ] = useState('convertor');

	return (
		<div className="App">
			<Navbar />
			{/* {pageMove === 'convertor' ? <Header /> : ''} */}
			<UserForm setPageMove={setPageMove} />
			{pageMove === 'convertor' ? (
				<div className="App-slideShow">
					<SlideShow />
				</div>
			) : (
				''
			)}
			<Footer />
		</div>
	);
}

export default App;
