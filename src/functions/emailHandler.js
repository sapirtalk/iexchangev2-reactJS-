/**
 * Sending an email with the wanted parameters to the user
 * @param   {Array} params the data from 'UserForm' component 
 */

const sendEmail = async (params) => {
	fetch(process.env.REACT_APP_EMAIL_API, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(params)
	}).then(() => {
		console.log('email sent!');
	});
};

export default sendEmail;
