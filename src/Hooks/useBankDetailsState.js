import { useState, useEffect } from 'react';
import getStorageValue from '../functions/getStorageValue';

const defaultMessage = {
	AccountNo: 'usNo',
	BranchNo: 'usBranch',
	BankNo: 'usBank'
};

const useBankDetailsState = (key = 'USA', defaultValue = defaultMessage) => {
	const [ value, setValue ] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	useEffect(
		() => {
			// storing input name
			localStorage.setItem(key, value);
		},
		[ key ]
	);

	return [ value, handleChange ];
};

export default useBankDetailsState;
