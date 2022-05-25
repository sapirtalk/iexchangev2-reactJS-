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

function findPrefix(value) {
	for (const currency of Currencies) {
		if (currency.value === value) return currency.prefix;
	}
}

export { Currencies, findPrefix };
