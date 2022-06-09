import React from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import UserForm from './components/userForm/UserForm';
import './App.css';
import Header from './components/header/Header';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Header />
			<UserForm />
			<Footer />
		</div>
	);
}

export default App;
