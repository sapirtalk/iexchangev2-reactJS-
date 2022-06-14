import React, { useState, useRef } from 'react';
import useStoragetState from '../../Hooks/useStorageState';
import './UserForm.css';
import Convertor from '../convertor/Convertor.js';
import UserDetails from '../userdetails/UserDetails';
import UseInputState from '../../Hooks/UseInputState';
import Toggle from '../../Hooks/Toggle';
import HandleFileInput from '../../Hooks/HandleFileInput';
import handleSubmit from '../../storageHandle';
import goodSubmit from '../../functions/goodSubmit';
import { v4 as uuid } from 'uuid';
import SubmitedScreen from '../submitedScreen/SubmitedScreen';
import sendEmail from '../../functions/emailHandler';

function UserForm(props) {
	const initEmailMessage = {
		AccountNo: 'usNo',
		BranchNo: 'usBranch',
		BankNo: 'usBank'
	};

	const [ amount, setAmount ] = useStoragetState('amount', '');
	const [ prefixFrom, setPrefixFrom ] = useStoragetState('prefixFrom', '$');
	const [ prefixTo, setPrefixTo ] = useStoragetState('prefixTo', '₪');
	const [ to, setTo ] = useStoragetState('to', 'ILS');
	const [ from, setFrom ] = useStoragetState('from', 'USD');
	const [ exchangeRate, setExchangeRate ] = useStoragetState('exchangeRate', 0);
	const [ outcome, setOutcome ] = useStoragetState('outcome', 0);
	const [ firstName, setFirstName ] = UseInputState('firstName', '');
	const [ LastName, setLastName ] = UseInputState('lastName', '');
	const [ email, setEmail ] = UseInputState('email', '');
	const [ accCountry, setAccCountry ] = useStoragetState('accCountry', 'USA');
	const [ toCountry, setToCountry ] = useStoragetState('toCountry', 'Israel');
	const [ idPic, setIdPic ] = HandleFileInput(undefined);
	const [ selfie, setSelfie ] = HandleFileInput(undefined);
	const [ mobile, setMobile ] = UseInputState('mobile', undefined);
	const [ recapcha, setRecapcha ] = Toggle(false);
	const [ amountsFlag, setAmountsFlag ] = Toggle(false);
	const [ termsFlag, setTermsFlag ] = Toggle(false);
	const [ emailMessage, setEmailMessage ] = useState(initEmailMessage);
	const [ transCode, setTransCode ] = useStoragetState('transCode', '');
	const [ mobilePrefix, setMobilePrefix ] = useStoragetState('mobilePrefix', '+972');
	const issueDate = new Date();
	const recaptchaRef = React.createRef();
	const params = useRef();
	const convertSetVals = {
		setAmount,
		setOutcome,
		setPrefixFrom,
		setPrefixTo,
		setTo,
		setFrom,
		setExchangeRate
	};
	const convertGetVals = {
		amount,
		outcome,
		prefixFrom,
		prefixTo,
		to,
		from,
		exchangeRate
	};

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
		transCode,
		emailMessage,
		mobilePrefix
	};
	const detailsSetVals = {
		setFirstName,
		setLastName,
		setEmail,
		setAccCountry,
		setToCountry,
		setIdPic,
		setSelfie,
		setMobile,
		setMobilePrefix
	};

	const handlePageMove = () => {
		if (props.pageMove === 'convertor') {
			props.setPageMove('userDetails');
			setTransCode(uuid());
		} else if (props.pageMove === 'userDetails') {
			props.setPageMove('convertor');
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
		recaptchaRef.current.execute();
		console.log(detailsGetVals);

		if (goodSubmit(detailsGetVals)) {
			var result = sendEmail(params.current);
			console.log(result);

			if (result === undefined) {
				props.setPageMove('submited');
				handleSubmit(detailsGetVals);
				localStorage.clear();
			} else alert('Oops! somthing is wrong with the email you have entered please check again');
		}
	};

	const resendEmail = () => {
		sendEmail(params.current);
	};

	const showPage = () => {
		switch (props.pageMove) {
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
						setEmailMessage={setEmailMessage}
						submit={submitHandler}
					/>
				);
			default:
				return (
					<Convertor setFormVals={convertSetVals} getFormVals={convertGetVals} continue={handlePageMove} />
				);

			case 'submited':
				return (
					<SubmitedScreen transCode={transCode} resend={resendEmail} toEmail={email} firstName={firstName} />
				);
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
				<input readOnly name="acc" value={emailMessage.AccountNo} />
				<input readOnly name="branch" value={emailMessage.BranchNo} />
				<input readOnly name="bank" value={emailMessage.BankNo} />
				<input readOnly name="from" value={from} />
				<input readOnly name="to" value={to} />
			</form>
		</div>
	);
}

export default UserForm;
