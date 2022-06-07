import React, { useState } from 'react';
import './SubmitedScreen.css';
import sendEmailLogo from '../../assets/send-mail.png';

export default function SubmitedScreen(props) {
	const [ resendFlag, SetResendFlag ] = useState(false);

	const handleResend = () => {
		SetResendFlag(true);
		props.resend();
	};

	return (
		<div className="submited">
			<h3 className="details">
				Thank you for using our services! we will contact you by email to continue the proccess.
			</h3>
			<h2 className="codeHead">Transaction code:</h2>
			<h2 className="code">{props.transCode}</h2>
			<p className="details">
				*Please make sure you save the Transaction code, it is needed as the bank transaction description
			</p>
			<p>Didnt recieve any email? </p>
			{resendFlag ? (
				<p className="resent">
					Email resent! please check your inbox again. If you still didnt get an email back then you can: try
					to fill the form again or email us at iexchange55@gmail.com for help.
				</p>
			) : (
				<a className="Resend" onClick={handleResend}>
					Resend
				</a>
			)}
			<img className="logo" src={sendEmailLogo} alt="logo" />
		</div>
	);
}
