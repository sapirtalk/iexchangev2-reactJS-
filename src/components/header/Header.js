import React from 'react';
import travel from '../../assets/travel.png';
import './Header.css';

export default function Header() {
	return (
		<div className="header">
			<p className="phrase">Start Converting Now!</p>
			<img src={travel} />
		</div>
	);
}
