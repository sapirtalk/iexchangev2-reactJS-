import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import prefixes from './Prefixes';

export default function PrefixSelect(props) {
	const handleChange = (event) => {
		let value = event.target.value;
		props.handleChange(value);
	};

	return (
		<div>
			<FormControl>
				<InputLabel id="demo-simple-select-label">{props.label}</InputLabel>

				<Select
					labelId="select"
					id="select"
					value={props.value}
					onChange={handleChange}
					size="small"
					label={props.label}
					sx={{
						width: 85
					}}
				>
					{prefixes.map((option) => {
						return (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						);
					})}
				</Select>
				<FormHelperText>{props.helperText}</FormHelperText>
			</FormControl>
		</div>
	);
}
