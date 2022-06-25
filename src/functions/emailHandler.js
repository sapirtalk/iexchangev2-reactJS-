/**
 * Sending an email with the wanted parameters to the user
 * @param   {Array} params the data from 'UserForm' component 
 */

const sendEmail = (params) => {
	return fetch(process.env.REACT_APP_EMAIL_API, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(params)
	});
};

export default sendEmail;
