import { useState, useEffect } from 'react';
import getStorageValue from '../functions/getStorageValue';

const useBankDetailsState = (key, defaultValue) => {
	const [ value, setValue ] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	const handleChange = () => {
		setValue(defaultValue);
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
