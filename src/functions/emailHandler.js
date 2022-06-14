import emailjs from '@emailjs/browser';

/**
 * Sending an email with the wanted parameters to the user
 * @param   {form.current} params the data from the hidden form in 'UserForm' component 
 */

const sendEmail = (params) => {
	emailjs
		.sendForm(
			process.env.REACT_APP_EMAILJS_SERVICE_ID,
			process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
			params,
			process.env.REACT_APP_EMAILJS_API_KEY
		)
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
