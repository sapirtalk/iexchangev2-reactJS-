import React from 'react';
import travel from '../../assets/travel.png';
import './Header.css';

/**
 * Component for the header.
 *
 * @component 
 */

export default function Header() {
	return (
		<div className="header">
			<div className="header-top">
				<p className="phrase">Fast, Easy & Free</p>
				<img src={travel} alt="travel" />
			</div>
		</div>
	);
}
