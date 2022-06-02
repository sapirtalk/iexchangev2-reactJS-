import React, { useState } from 'react';
import './UserForm.css';
import Convertor from '../convertor/Convertor.js';
import UserDetails from '../userdetails/UserDetails';
import UseInputState from '../../Hooks/UseInputState';
import Toggle from '../../Hooks/Toggle';
import HandleFileInput from '../../Hooks/HandleFileInput';

function UserForm() {
	const [ amount, setAmount ] = useState(0);
	const [ prefixFrom, setPrefixFrom ] = useState('$');
	const [ prefixTo, setPrefixTo ] = useState('₪');
	const [ to, setTo ] = useState('ILS');
	const [ from, setFrom ] = useState('USD');
	const [ exchangeRate, setExchangeRate ] = useState(0);
	const [ outcome, setOutcome ] = useState(0);
	const [ moveForm, setMove ] = Toggle(false);
	const [ firstName, setFirstName ] = UseInputState('');
	const [ LastName, setLastName ] = UseInputState('');
	const [ email, setEmail ] = UseInputState('');
	const [ emailConfirm, setEmailConfirm ] = UseInputState('');
	const [ accCountry, setAccCountry ] = useState('US');
	const [ toCountry, setToCountry ] = useState('Israel');
	const [ idPic, setIdPic ] = HandleFileInput(null);
	const [ selfie, setSelfie ] = HandleFileInput(null);

	const convertSetVals = { setAmount, setOutcome, setPrefixFrom, setPrefixTo, setTo, setFrom, setExchangeRate };
	const convertGetVals = { amount, outcome, prefixFrom, prefixTo, to, from, exchangeRate };

	const detailsGetVals = {
		firstName,
		LastName,
		email,
		emailConfirm,
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
		exchangeRate
	};
	const detailsSetVals = {
		setFirstName,
		setLastName,
		setEmail,
		setEmailConfirm,
		setAccCountry,
		setToCountry,
		setIdPic,
		setSelfie
	};

	return (
		<div className="UserForm">
			{moveForm ? (
				<UserDetails handleBack={setMove} getVals={detailsGetVals} setVals={detailsSetVals} />
			) : (
				<Convertor setFormVals={convertSetVals} getFormVals={convertGetVals} continue={setMove} />
			)}
		</div>
	);
}

export default UserForm;
