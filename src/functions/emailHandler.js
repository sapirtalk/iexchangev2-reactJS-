import emailjs from '@emailjs/browser';

const sendEmail = (params) => {
	emailjs.sendForm('service_dgoz1ia', 'template_3f6y4og', params, 'AOMLDowdUezNI3xPA').then(
		(result) => {
			console.log(result.text);
		},
		(error) => {
			console.log(error.text);
		}
	);
};

export default sendEmail;
