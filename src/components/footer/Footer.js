import React from 'react';
import './footer.css';
import footerLogo from '../../assets/Picture1.png';

/**
 * Component for the footer.
 *
 * @component 
 */

function Footer() {
	return (
		<div className="footer">
			<img className="footer-logo" src={footerLogo} alt="footerLogo" />
			<div className="footer-text">
				<div className="footer-contact">
					<h1>Contact Us:</h1>
					<a href="iexchange55@gmail.com">iexchange55@gmail.com</a>
				</div>
				<p>© All rights reserved to Sapir Talker © | IExchange 2022</p>
			</div>
		</div>
	);
}

export default Footer;
