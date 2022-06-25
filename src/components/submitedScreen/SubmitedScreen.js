import React, { useState } from 'react';
import './SubmitedScreen.css';
import email from '../../assets/email.png';
import { TransDetails } from './TransDetails';

/**
 * Component for the sumbited phase.
 *
 * @component
 * 
 * @props  firstName , toEmail, transCode
 * @states resendFlag
 */

export default function SubmitedScreen(props) {
	const [ resendFlag, SetResendFlag ] = useState(false);
	const getVals = props.getVals;
	/**
	 * Triggers resend of email to the user
	 */
	const handleResend = () => {
		SetResendFlag(true);
		props.resend();
	};

	return (
		<div className="submited">
			<div className="submited-heading">
				<h1>You are almost done! ,Only one more step to go</h1>
			</div>
			<div className="submited-top">
				<h3 className="details">
					Thank you for using our services <span style={{ color: 'blue' }}>{getVals.firstName}</span>! we sent
					an email with the transaction code to <span style={{ color: 'blue' }}>{getVals.email}</span>.
				</h3>
				<img src={email} alt="email sent" />
			</div>
			<div className="submited-noEmail">
				<p>Didnt recieve any email? </p>
				<p className="submited-noEmail check">Try to check the promotions and junk tabs</p>
			</div>
			{resendFlag ? (
				<p className="resent">
					Email resent! please check your inbox again. If you still didnt get an email back then you can try
					to apply again or email us at iexchange55@gmail.com for help.
				</p>
			) : (
				<p className="Resend" onClick={handleResend}>
					Resend
				</p>
			)}
			<p className="details check">
				*Make sure to save the Transaction code, it is needed as the bank transaction description.
			</p>
			<div className="submited-transDetails">
				<TransDetails getVals={getVals} />
			</div>
		</div>
	);
}
