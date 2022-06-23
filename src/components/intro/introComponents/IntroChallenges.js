import React from 'react';
import './introComponents.css';
import globe from '../../../assets/globe.png';
const IntroChallenges = () => {
	return (
		<div className="introChallenges">
			<h1>Financial challenges require social solutions</h1>
			<img src={globe} alt="globe" />
			<div>
				<span>
					Imagine a world where people can exchange currencies without using banks. We could trade using the
					true value of our money without paying excessive fees and commissions.
				</span>
				<p>...</p>
				<span>
					IExchange connects travelers from all over the world with currency exchange needs and helps them in
					getting the most out of their money.
				</span>
			</div>
		</div>
	);
};

export default IntroChallenges;
