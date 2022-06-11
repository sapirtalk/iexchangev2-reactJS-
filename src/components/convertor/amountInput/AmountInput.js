import React from 'react';
import TextField from '@mui/material/TextField';
import NumberFormatCustom from './Format';

/**
 * Component for currency input.
 *
 * @component
 * @props setAmount , prefix , initialPre , label , size
 * 
 * @example
 * const setAmount=handleChange
 * const prefix= getCurPrefix
 * const initialPre="$"
 * const label="Amount:"
 * const size="small"
 * 
 */

export default function AmountInput(props) {
	return (
		<div>
			<TextField
				label={props.label}
				onChange={props.setAmount}
				name={props.prefix !== undefined ? props.prefix : props.initialPre}
				InputProps={{
					inputComponent: NumberFormatCustom //needed for the Currency signs
				}}
				inputProps={{
					maxLength: 7
				}}
				size={props.size}
				placeholder={props.prefix}
			/>
		</div>
	);
}
