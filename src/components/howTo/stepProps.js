import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';
import four from '../../assets/four.png';
import exchange from '../../assets/money-exchange.png';
import email from '../../assets/getmailed.png';
import transfer from '../../assets/refinance.png';
import wait from '../../assets/hour.png';

const stepProps = [
	{
		numImg: one,
		image: exchange,
		altNum: 'one',
		alt: 'exchange',
		heading: 'Convert',
		body: 'Use the convertor to decide how much would you like to exchange with current mid-market rate'
	},
	{
		numImg: two,
		image: email,
		altNum: 'three',
		alt: 'email',
		heading: 'Get emailed',
		body: 'After filling the form you will recieve an email with a transaction code to be used in the transfer'
	},
	{
		numImg: three,
		image: transfer,
		altNum: 'four',
		alt: 'trasfer',
		heading: 'Make a transfer',
		body:
			'Make a bank transfer with the given bank details and paste the transaction code in the transfer description'
	},
	{
		numImg: four,
		image: wait,
		altNum: 'five',
		alt: 'wait',
		heading: 'Done!',
		body:
			'Thats it you are done! , all that is left is to wait for the transaction to come through. it may take up to 24 hours depends on the bank'
	}
];

export default stepProps;
