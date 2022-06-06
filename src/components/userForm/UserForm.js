import React, { useState, useRef } from 'react';
import './UserForm.css';
import Convertor from '../convertor/Convertor.js';
import UserDetails from '../userdetails/UserDetails';
import UseInputState from '../../Hooks/UseInputState';
import Toggle from '../../Hooks/Toggle';
import HandleFileInput from '../../Hooks/HandleFileInput';
import handleSubmit from '../../storageHandle';
import goodSubmit from '../../functions/goodSubmit';
import { v4 as uuid } from 'uuid';
import SubmitedScreen from '../SubmitedScreen';
import sendEmail from '../../functions/emailHandler';

function UserForm() {
	const [ amount, setAmount ] = useState(0);
	const [ prefixFrom, setPrefixFrom ] = useState('$');
	const [ prefixTo, setPrefixTo ] = useState('₪');
	const [ to, setTo ] = useState('ILS');
	const [ from, setFrom ] = useState('USD');
	const [ exchangeRate, setExchangeRate ] = useState(0);
	const [ outcome, setOutcome ] = useState(0);
	const [ firstName, setFirstName ] = UseInputState('');
	const [ LastName, setLastName ] = UseInputState('');
	const [ email, setEmail ] = UseInputState('');
	const [ accCountry, setAccCountry ] = useState('US');
	const [ toCountry, setToCountry ] = useState('Israel');
	const [ idPic, setIdPic ] = HandleFileInput(null);
	const [ selfie, setSelfie ] = HandleFileInput(null);
	const [ mobile, setMobile ] = UseInputState(null);
	const [ recapcha, setRecapcha ] = Toggle(false);
	const [ amountsFlag, setAmountsFlag ] = Toggle(false);
	const [ termsFlag, setTermsFlag ] = Toggle(false);
	const [ pageMove, setPageMove ] = useState('convertor');
	const [ emailMessage, setEmailMessage ] = useState('');

	const issueDate = new Date();
	const recaptchaRef = React.createRef();
	const params = useRef();
	const transCode = uuid();
	const convertSetVals = { setAmount, setOutcome, setPrefixFrom, setPrefixTo, setTo, setFrom, setExchangeRate };
	const convertGetVals = { amount, outcome, prefixFrom, prefixTo, to, from, exchangeRate };

	const detailsGetVals = {
		firstName,
		LastName,
		email,
		accCountry,
		toCountry,
		idPic,
		selfie,
		amount,
		outcome,
		prefixFrom,
		prefixTo,
		to,
		from,
		exchangeRate,
		mobile,
		issueDate,
		recapcha,
		amountsFlag,
		termsFlag,
		transCode
	};
	const detailsSetVals = {
		setFirstName,
		setLastName,
		setEmail,
		setAccCountry,
		setToCountry,
		setIdPic,
		setSelfie,
		setMobile
	};

	const handlePageMove = () => {
		if (pageMove === 'convertor') {
			setPageMove('userDetails');
		} else if (pageMove === 'userDetails') {
			setPageMove('convertor');
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
		recaptchaRef.current.execute();
		console.log(detailsGetVals);

		var message = '';
		switch (accCountry) {
			case 'US':
				message = 'US account details and instructions';
				break;
			case 'Israel':
				message = 'Israel account details and instructions';
				break;
			default:
				message = 'no Country';
		}
		setEmailMessage(message);

		if (goodSubmit(detailsGetVals)) {
			handleSubmit(detailsGetVals);
			sendEmail(params.current);
			setPageMove('submited');
		}
	};

	const showPage = () => {
		switch (pageMove) {
			case 'convertor':
				return (
					<Convertor setFormVals={convertSetVals} getFormVals={convertGetVals} continue={handlePageMove} />
				);
			case 'userDetails':
				return (
					<UserDetails
						handleBack={handlePageMove}
						getVals={detailsGetVals}
						setVals={detailsSetVals}
						recapchaFlag={setRecapcha}
						recaptchaRef={recaptchaRef}
						amountsFlag={setAmountsFlag}
						termsFlag={setTermsFlag}
						submit={submitHandler}
					/>
				);

			case 'submited':
				return <SubmitedScreen transCode={transCode} />;
		}
	};

	return (
		<div className="UserForm">
			{showPage()}

			<form ref={params} className="hiddenForm">
				<input readOnly name="firstName" value={firstName} />
				<input readOnly name="amount" value={amount} />
				<input readOnly name="outcome" value={outcome} />
				<input readOnly name="prefixFrom" value={prefixFrom} />
				<input readOnly name="prefixTo" value={prefixTo} />
				<input readOnly name="email" value={email} />
				<input readOnly name="transCode" value={transCode} />
				<input readOnly name="exchangeRate" value={exchangeRate} />
				<input readOnly name="accCountry" value={accCountry} />
				<input readOnly name="message" value={emailMessage} />
			</form>
		</div>
	);
}

export default UserForm;
