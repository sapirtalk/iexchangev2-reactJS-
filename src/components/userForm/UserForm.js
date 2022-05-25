import React, { useState } from 'react';
import './UserForm.css';
import Convertor from '../convertor/Convertor.js';
import UseInputState from '../../Hooks/UseInputState';

function UserForm() {
	const [ amount, setAmount ] = useState(0);
	const [ prefixFrom, setPrefixFrom ] = useState('$');
	const [ prefixTo, setPrefixTo ] = useState('₪');
	const [ to, setTo ] = useState('ILS');
	const [ from, setFrom ] = useState('USD');
	const [ exchangeRate, setExchangeRate ] = useState(0);
	const [ outcome, setOutcome ] = useState(0);
	const [ firstName, setFirstName ] = UseInputState('');

	const convertSetVals = { setAmount, setOutcome, setPrefixFrom, setPrefixTo, setTo, setFrom, setExchangeRate };
	const convertGetVals = { amount, outcome, prefixFrom, prefixTo, to, from, exchangeRate };
	return (
		<div className="UserForm">
			<Convertor setFormVals={convertSetVals} getFormVals={convertGetVals} />
		</div>
	);
}

export default UserForm;
