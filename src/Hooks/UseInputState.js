import { useState } from 'react';

export default function UseInputState(initialVal = false) {
	const [ value, setValue ] = useState(initialVal);
	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return [ value, handleChange ];
}
