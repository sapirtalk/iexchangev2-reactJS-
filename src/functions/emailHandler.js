import emailjs from '@emailjs/browser';

const sendEmail = (params) => {
	emailjs.sendForm('service_waxtf7t', 'template_m65y3tn', params, 'b6VaHRujA3r8bQOYH').then(
		(result) => {
			console.log(result.text);
		},
		(error) => {
			console.log(error.text);
		}
	);
};

export default sendEmail;
