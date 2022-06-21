import React from 'react';
import credit from '../../assets/download-customizer.png';
import giftCard from '../../assets/gift-card.png';
import check from '../../assets/check.png';
import Bullet from '../bullets/Bullet';
import SlideShow from '../slideShow/SlideShow';
import TrustBullet from '../bullets/TrustBullet';
import IntroChallenges from './introComponents/IntroChallenges';

import './Intro.css';

const Intro = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<div className="intro">
			<div className="intro-trust">
				<TrustBullet iconClass={'fa-solid fa-shield-halved'} descTop="Fast" descBot="& Secure" />
				<TrustBullet iconClass={'fa-brands fa-nfc-symbol'} descTop="NFC" descBot="Supported" />
				<TrustBullet
					iconClass={'fa-solid fa-hand-holding-hand'}
					descTop="Transparency"
					descBot="& Credibility"
				/>
			</div>
			<div className="intro-header">
				<p>Introducing a new & better way to pay abroad</p>
				<div className="intro-header-images">
					<img src={credit} alt="credit" />
					<img src={giftCard} alt="gift" />
				</div>
				<div className="intro-header-bullets">
					<Bullet image={check} desc="Easy to use digital card" />
					<Bullet image={check} desc="Current market rates" />
					<Bullet image={check} desc="24/7 technical & costumer Support" />
					<Bullet image={check} desc="Use even when abroad" />
					<Bullet image={check} desc="Secure exchange via bank transfer" />
				</div>
				<div className="intro-header-slideShow">
					<SlideShow />
				</div>
				<div className="intro-challenges">
					<IntroChallenges />
				</div>
				<button className="intro-btn" onClick={scrollToTop}>
					Try now!
				</button>
			</div>
		</div>
	);
};

export default Intro;
