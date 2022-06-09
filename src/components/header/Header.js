import React from 'react';
import travel from '../../assets/travel.png';
import './Header.css';
import Bullet from './bullets/Bullet';
import noFee from '../../assets/no-fee.png';

export default function Header() {
	return (
		<div className="header">
			<div className="header-top">
				<p className="phrase">Start Converting Now!</p>
				<img src={travel} alt="travel" />
			</div>
			{/* <div className="header-bullets-container">
				<div className="header-bullets-container-column">
					<Bullet image={noFee} desc="We dont take any exchange fees!" />
					<Bullet image={noFee} desc="desc" />
				</div>
				<div>
					<Bullet image={noFee} desc="desc" />
					<Bullet image={noFee} desc="desc" />
				</div>
			</div> */}
		</div>
	);
}
