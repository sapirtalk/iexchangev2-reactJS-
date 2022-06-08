import emailjs from '@emailjs/browser';

//handle the email sending to emailjs, will return 'success' if succsess or 'failed' otherwise
const sendEmail = (params) => {
	emailjs.sendForm('service_waxtf7t', 'template_m65y3tn', params, 'b6VaHRujA3r8bQOYH').then(
		(result) => {
			console.log(result.text);
			return 'success';
		},
		(error) => {
			console.log(error.text);
			return 'failed';
		}
	);
};

export default sendEmail;
