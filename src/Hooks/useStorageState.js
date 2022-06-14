import { useState, useEffect } from 'react';
import getStorageValue from '../functions/getStorageValue';

const useStoragetState = (key, defaultValue) => {
	const [ value, setValue ] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	useEffect(
		() => {
			// storing input name
			localStorage.setItem(key, value);
		},
		[ key, value ]
	);

	return [ value, setValue ];
};

export default useStoragetState;
