import React, { useState } from 'react';
import './footer.css';
import footerLogo from '../../assets/iexchange_logo.png';
import Alert from '@mui/material/Alert';

/**
 * Component for the footer.
 *
 * @component 
 */

function Footer() {
	const [ showCopied, setShowCopied ] = useState(false);

	const contactClick = () => {
		navigator.clipboard.writeText('iexchange55@gmail.com');
		setShowCopied(true);
		setTimeout(() => {
			setShowCopied(false);
		}, 1500);
	};

	return (
		<div className="footer">
			{showCopied ? (
				<div className="copied-alert">
					<Alert severity="success">Email Copied to Clipboard</Alert>
				</div>
			) : (
				''
			)}
			<img className="footer-logo" src={footerLogo} alt="footerLogo" />
			<div className="footer-text">
				<div className="footer-contact">
					<h1>Contact Us:</h1>
					<button onClick={contactClick}>iexchange55@gmail.com</button>
				</div>
				<p>© All rights reserved to Sapir Talker © | IExchange 2022</p>
			</div>
		</div>
	);
}

export default Footer;
