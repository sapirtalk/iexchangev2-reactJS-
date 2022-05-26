import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import Countries from './Countries';

export default function CountryDrop(props) {
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
						width: 150
					}}
				>
					{Countries.map((option) => {
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
