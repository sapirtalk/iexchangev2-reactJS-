import React, { useState } from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import UserForm from './components/userForm/UserForm';
import './App.css';
import SlideShow from './components/slideShow/SlideShow';
import useStorageState from './Hooks/useStorageState';

function App() {
	const [ pageMove, setPageMove ] = useStorageState('pageMove', 'convertor');
	console.log(pageMove);

	return (
		<div className="App">
			<Navbar setPageMove={setPageMove} />
			{/* {pageMove === 'convertor' ? <Header /> : ''} */}
			<UserForm setPageMove={setPageMove} pageMove={pageMove} />
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
