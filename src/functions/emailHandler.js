import emailjs from '@emailjs/browser';

/**
 * Sending an email with the wanted parameters to the user
 * @param   {form.current} params the data from the hidden form in 'UserForm' component 
 */

const sendEmail = (params) => {
	emailjs
		.sendForm(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, params, process.env.EMAILJS_API_KEY)
		.then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
};

export default sendEmail;
