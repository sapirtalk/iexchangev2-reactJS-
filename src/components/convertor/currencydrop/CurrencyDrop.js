import { React } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Currencies, findPrefix } from '../Currencies';

/**
 * Component for currency dropdown select .
 *
 * @component
 * @props label, setValue , value , setApi , setPrefix
 * 
 * @example
 * const setValue=handleChange
 * const setPrefix= setPrefix
 * const setApi= setApi
 * const label="From currency"
 * 
 * 
 */

export default function CurrencyDrop(props) {
	/**
 * handeling the change of currency, will update the currency state, rerun the converter API useEffect again
 * and change to the correct cuurency prefix
 * @param   {event} event current change value here is event.target.value 
 */
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
