import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

/**
 * Component for a custom Number format to inputs from materialUI.
 *
 * @component
 */

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
	const { onChange, name, ...other } = props;
	return (
		<NumberFormat
			{...other}
			getInputRef={ref}
			onValueChange={(values) => {
				onChange({
					target: {
						name: props.name,
						value: values.value
					}
				});
			}}
			thousandSeparator
			isNumericString
			prefix={name}
		/>
	);
});

NumberFormatCustom.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default NumberFormatCustom;
