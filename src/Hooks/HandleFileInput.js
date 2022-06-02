import { useState } from 'react';

export default function HandleFileInput(init = null) {
	const [ value, setValue ] = useState(init);
	const handleChange = (e) => {
		setValue(e.target.files[0]);
	};

	return [ value, handleChange ];
}
