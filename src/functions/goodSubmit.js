/**
 * Checks if the details that were entered are as expected
 * @param   {list} data  List of the user's details
 * @return {boolean}  true if it is a good submit  
 */

const goodSubmit = (data) => {
	var flag = false;
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var validText = /^[[a-zA-Z]*$/;
	if (data.firstName === '' || !data.firstName.match(validText)) alert('Please provide a first name');
	else if (data.LastName === '' || !data.LastName.match(validText)) alert('Please provide a last name');
	else if (data.accCountry === data.toCountry) alert('The countries you have entered are the same!');
	else if (data.email === '' || !data.email.match(validRegex)) alert('Please provide a legit email');
	else if (data.mobile === null) alert('Please provide a mobile number');
	else if (data.idPic === null) alert('Please provide  ID/PASSPORT');
	else if (data.selfie === null) alert('Please provide a self photo');
	else if (!data.amountsFlag) alert('Please agree to the amounts and exchange rates');
	else if (!data.termsFlag) alert('Please agree to the terms and conditions');
	else if (!data.recapchaToken) alert('Please verify that you are a human');
	else flag = true;

	return flag;
};

export default goodSubmit;
