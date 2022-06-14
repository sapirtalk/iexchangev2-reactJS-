import { useState, useEffect } from 'react';
import getStorageValue from '../functions/getStorageValue';

/**
 * Custom hook for a text input
 * @param   {object} initialVal  the initial value
 * @return {[state ,function]} new hook  
 */
// export default function UseInputState(initialVal) {
// 	const [ value, setValue ] = useState(initialVal);
// 	const handleChange = (e) => {
// 		setValue(e.target.value);
// 	};

// 	return [ value, handleChange ];
// }

const UseInputState = (key, defaultValue) => {
	const [ value, setValue ] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	useEffect(
		() => {
			// storing input name
			localStorage.setItem(key, value);
		},
		[ key, value ]
	);

	return [ value, handleChange ];
};

export default UseInputState;
