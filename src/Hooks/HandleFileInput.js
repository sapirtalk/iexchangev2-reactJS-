import { useState } from 'react';

/**
 * Custom hook for a file input
 * @param   {file} init  the initial file, default is NULL
 * @return {[state ,function]} new hook [State value,setState function]  
 */

export default function HandleFileInput(init = null) {
	const [ value, setValue ] = useState(init);
	const handleChange = (e) => {
		setValue(e.target.files[0]);
	};

	return [ value, handleChange ];
}
