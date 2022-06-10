import React, { useState } from 'react';
import './SubmitedScreen.css';

export default function SubmitedScreen(props) {
	const [ resendFlag, SetResendFlag ] = useState(false);

	const handleResend = () => {
		SetResendFlag(true);
		props.resend();
	};

	return (
		<div className="submited">
			<h3 className="details">
				Thank you for using our services <span style={{ color: 'blue' }}>{props.firstName}</span>! we will
				contact you by email to continue the proccess at <span style={{ color: 'blue' }}>{props.toEmail}</span>.
			</h3>
			<h2 className="codeHead">Transaction code:</h2>
			<h2 className="code">{props.transCode}</h2>
			<p className="details">
				*Please make sure you save the Transaction code, it is needed as the bank transaction description
			</p>
			<p>Didnt recieve any email? </p>
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
		</div>
	);
}
