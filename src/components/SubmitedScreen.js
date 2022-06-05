import React from 'react';

export default function SubmitedScreen(props) {
	return (
		<div className="submited">
			<h3>Thank you for using our services! we will contact you by email to continue the proccess.</h3>
			<h1>Transaction code: {props.transCode}</h1>
			<p>Please make sure you save the Transaction code, it is needed as the bank transaction description</p>
		</div>
	);
}
