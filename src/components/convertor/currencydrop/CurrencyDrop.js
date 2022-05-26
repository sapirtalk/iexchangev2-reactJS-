import { React } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Currencies, findPrefix } from '../Currencies';

export default function CurrencyDrop(props) {
	const handleChange = (event) => {
		let value = event.target.value;
		props.setValue(value);
		props.setApi();
		let prefix = findPrefix(value);
		props.setPrefix(prefix);
	};

	return (
		<div>
			<FormControl>
				<InputLabel id="demo-simple-select-label" sx={{ color: 'black' }}>
					{props.label}
				</InputLabel>

				<Select
					labelId="select"
					id="select"
					value={props.value}
					label="From:"
					onChange={handleChange}
					size="large"
					sx={{
						width: 100
					}}
				>
					{Currencies.map((option) => {
						return (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</div>
	);
}
