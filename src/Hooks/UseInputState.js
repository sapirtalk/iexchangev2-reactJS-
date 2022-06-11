import { useState } from 'react';

/**
 * Custom hook for a test input
 * @param   {object} initialVal  the initial value
 * @return {[state ,function]} new hook  
 */
export default function UseInputState(initialVal) {
	const [ value, setValue ] = useState(initialVal);
	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return [ value, handleChange ];
}
