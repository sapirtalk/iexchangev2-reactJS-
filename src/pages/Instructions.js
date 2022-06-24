import React from 'react';
import HowTo from '../components/howTo/HowTo';
import './Instructions.css';
const Instructions = () => {
	return (
		<div className="instructions">
			<div className="instructions-howTo">
				<HowTo />
			</div>
			<div className="instructions-getStarted">
				<a href="/home">Get Started</a>
			</div>
		</div>
	);
};

export default Instructions;
