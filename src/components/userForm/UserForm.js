import React, { useState } from 'react';
import './UserForm.css';
import Convertor from '../convertor/Convertor.js';
import UserDetails from '../userdetails/UserDetails';
import UseInputState from '../../Hooks/UseInputState';
import Toggle from '../../Hooks/Toggle';

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

	const convertSetVals = { setAmount, setOutcome, setPrefixFrom, setPrefixTo, setTo, setFrom, setExchangeRate };
	const convertGetVals = { amount, outcome, prefixFrom, prefixTo, to, from, exchangeRate };
	return (
		<div className="UserForm">
			{moveForm ? (
				<UserDetails handleBack={setMove} />
			) : (
				<Convertor setFormVals={convertSetVals} getFormVals={convertGetVals} handleContinue={setMove} />
			)}
		</div>
	);
}

export default UserForm;
