import emailjs from '@emailjs/browser';

/**
 * Sending an email with the wanted parameters to the user
 * @param   {form.current} params the data from the hidden form in 'UserForm' component 
 */

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
