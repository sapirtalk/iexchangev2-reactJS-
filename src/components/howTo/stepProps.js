import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';
import four from '../../assets/four.png';
import exchange from '../../assets/currency-exchange.png';
import form from '../../assets/booking.png';
import email from '../../assets/email.png';
import trasfer from '../../assets/bank-transfer.png';

const stepProps = [
	{
		numImg: one,
		image: exchange,
		altNum: 'one',
		alt: 'exchange',
		heading: 'Convert',
		body: 'instructions'
	},
	{
		numImg: two,
		image: form,
		altNum: 'two',
		alt: 'form',
		heading: 'Fill details',
		body: 'instructions'
	},
	{
		numImg: three,
		image: email,
		altNum: 'three',
		alt: 'email',
		heading: 'Get emailed',
		body: 'instructions'
	},
	{
		numImg: four,
		image: trasfer,
		altNum: 'four',
		alt: 'trasfer',
		heading: 'Make a transfer',
		body: 'instructions'
	}
];

export default stepProps;
