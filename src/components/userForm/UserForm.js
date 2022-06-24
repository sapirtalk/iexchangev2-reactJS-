import React from 'react';
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
import useBankDetailsState from '../../Hooks/useBankDetailsState';

function UserForm(props) {
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
	const [ bankDetails, setBankDetails ] = useBankDetailsState();
	const [ transCode, setTransCode ] = useStoragetState('transCode', '');
	const [ mobilePrefix, setMobilePrefix ] = useStoragetState('mobilePrefix', '+972');
	const issueDate = new Date();
	const recaptchaRef = React.createRef();

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
		mobilePrefix,
		bankDetails
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
		setMobilePrefix,
		setBankDetails
	};

	const submitedDetails = {
		amount,
		outcome,
		exchangeRate,
		from,
		to,
		prefixFrom,
		prefixTo,
		email,
		firstName,
		accCountry,
		bankDetails
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
		const params = {
			firstName: firstName,
			email: email,
			transCode: transCode
		};

		if (goodSubmit(detailsGetVals)) {
			sendEmail(params);

			props.setPageMove('submited');
			handleSubmit(detailsGetVals);
			localStorage.clear();
		}
	};

	const resendEmail = () => {
		const params = {
			firstName: firstName,
			email: email,
			transCode: transCode
		};
		sendEmail(params);
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
						submit={submitHandler}
					/>
				);
			default:
				return (
					<Convertor setFormVals={convertSetVals} getFormVals={convertGetVals} continue={handlePageMove} />
				);

			case 'submited':
				return <SubmitedScreen getVals={submitedDetails} resend={resendEmail} />;
		}
	};

	return <div className="UserForm">{showPage()}</div>;
}

export default UserForm;
