import React from 'react';
import TextField from '@mui/material/TextField';
import NumberFormatCustom from './Format';

export default function AmountInput(props) {
	return (
		<div>
			<TextField
				label={props.label}
				onChange={props.setAmount}
				name={props.prefix !== undefined ? props.prefix : props.initialPre}
				InputProps={{
					inputComponent: NumberFormatCustom
				}}
				size={props.size}
				placeholder={props.prefix}
			/>
		</div>
	);
}
