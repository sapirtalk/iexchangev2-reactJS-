//list of Currencies in the app
const Currencies = [
	{
		prefix: '$',
		label: '$ USD',
		value: 'USD'
	},
	{
		prefix: '₪',
		label: '₪ ILS',
		value: 'ILS'
	}
];

/**
*find the currenct prefix
*@param {string} value the current currecny value
*@return {string} returning the prefix of the current Currency value
*/
function findPrefix(value) {
	for (const currency of Currencies) {
		if (currency.value === value) return currency.prefix;
	}
}

export { Currencies, findPrefix };
