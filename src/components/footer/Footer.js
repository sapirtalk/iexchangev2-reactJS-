import React from 'react';
import './footer.css';
import footerLogo from '../../assets/logo.png';

function Footer() {
	return (
		<div className="footer">
			<img className="footer-logo" src={footerLogo} alt="footerLogo" />
			<div className="footer-copyright">
				<p>© All rights reserved to Sapir Talker © | IExchange 2022</p>
			</div>
		</div>
	);
}

export default Footer;
