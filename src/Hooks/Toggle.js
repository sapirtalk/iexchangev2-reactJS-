import { useState, useEffect } from 'react';
import getStorageValue from '../functions/getStorageValue';

/**
 * Custom hook for a boolean state
 * @param   {boolean} initialVal  the initial value
 * @return {[state ,function]} new hook [State value, a toggle function between True/False]  
 */
export default function Toggle(initialVal) {
	const [ Toggle, setToggle ] = useState(initialVal);

	const Toggler = () => {
		setToggle(!Toggle);
	};

	return [ Toggle, Toggler ];
}
