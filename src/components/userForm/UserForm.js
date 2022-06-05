import React, { useState } from 'react';
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

function UserForm() {
	const [ amount, setAmount ] = useState(0);
	const [ prefixFrom, setPrefixFrom ] = useState('$');
	const [ prefixTo, setPrefixTo ] = useState('₪');
	const [ to, setTo ] = useState('ILS');
	const [ from, setFrom ] = useState('USD');
	const [ exchangeRate, setExchangeRate ] = useState(0);
	const [ outcome, setOutcome ] = useState(0);
	const [ firstName, setFirstName ] = UseInputState(null);
	const [ LastName, setLastName ] = UseInputState(null);
	const [ email, setEmail ] = UseInputState(null);
	const [ accCountry, setAccCountry ] = useState('US');
	const [ toCountry, setToCountry ] = useState('Israel');
	const [ idPic, setIdPic ] = HandleFileInput(null);
	const [ selfie, setSelfie ] = HandleFileInput(null);
	const [ mobile, setMobile ] = UseInputState(null);
	const [ recapcha, setRecapcha ] = Toggle(false);
	const [ amountsFlag, setAmountsFlag ] = Toggle(false);
	const [ termsFlag, setTermsFlag ] = Toggle(false);
	const [ pageMove, setPageMove ] = useState('convertor');
	const [ transCode, setTransCode ] = useState(null);

	const issueDate = new Date();
	const recaptchaRef = React.createRef();

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
		setTransCode(uuid());
		recaptchaRef.current.execute();
		console.log(detailsGetVals);
		if (goodSubmit(detailsGetVals)) {
			handleSubmit(detailsGetVals);
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

	return <div className="UserForm">{showPage()}</div>;
}

export default UserForm;
