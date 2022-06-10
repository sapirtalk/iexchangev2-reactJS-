import React from 'react';
import travel from '../../assets/travel.png';
import './Header.css';

export default function Header() {
	return (
		<div className="header">
			<div className="header-top">
				<p className="phrase">Start Converting Now!</p>
				<img src={travel} alt="travel" />
			</div>
		</div>
	);
}
