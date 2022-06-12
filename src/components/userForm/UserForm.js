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
import SubmitedScreen from '../submitedScreen/SubmitedScreen';
import sendEmail from '../../functions/emailHandler';
import Bullet from '../../components/bullets/Bullet';
import noFee from '../../assets/no-fee.png';
import payment from '../../assets/mobile-payment.png';
import international from '../../assets/international.png';
import wallet from '../../assets/wallet.png';
import hours from '../../assets/24-hours.png';

function UserForm(props) {
	const initEmailMessage =
		'IExchange US account information: \n Account No : usNo \n Branch No : usBranch \n Bank No: usBank';

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
	const [ emailMessage, setEmailMessage ] = useState(initEmailMessage);
	const [ transCode, setTransCode ] = useState('');
	const [ mobilePrefix, setMobilePrefix ] = useState('+972');

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
		if (pageMove === 'convertor') {
			setPageMove('userDetails');
			props.setPageMove('userDetails');
			setTransCode(uuid());
		} else if (pageMove === 'userDetails') {
			setPageMove('convertor');
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
				setPageMove('submited');
				props.setPageMove('submited');
				handleSubmit(detailsGetVals);
			} else alert('Oops! somthing is wrong with the email you have entered please check again');
		}
	};

	const resendEmail = () => {
		sendEmail(params.current);
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
			<div className="payComp">
				<i className="fa-brands fa-cc-visa " />
				<i className="fa-brands fa-apple-pay" />
				<i className="fa-brands fa-google-pay" />
			</div>
			{pageMove === 'convertor' ? (
				<div className="userFormBullets">
					<Bullet image={noFee} desc="We take no exchange fees!" />
					<Bullet image={payment} desc="Easy pay by mobile!" />
					<Bullet image={international} desc="Use our services even when abroad!" />
					<Bullet image={wallet} desc="No need to carry cash around!" />
					<Bullet image={hours} desc="Get your funds in less then 24 hours!" />
				</div>
			) : (
				''
			)}
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
				<input readOnly name="from" value={from} />
				<input readOnly name="to" value={to} />
			</form>
		</div>
	);
}

export default UserForm;
