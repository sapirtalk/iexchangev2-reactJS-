const goodSubmit = (data) => {
	var flag = false;

	if (data.firstName === '') alert('Please provide a first name');
	else if (data.LastName === '') alert('Please provide a last name');
	else if (data.email === '' || !data.email.includes('@')) alert('Please provide a legit email');
	else if (data.mobile === null) alert('Please provide a mobile number');
	else if (data.idPic === null) alert('Please provide  ID/PASSPORT');
	else if (data.selfie === null) alert('Please provide a self photo');
	else if (!data.amountsFlag) alert('Please agree to the amounts and exchange rates');
	else if (!data.termsFlag) alert('Please agree to the terms and conditions');
	else flag = true;

	return flag;
};

export default goodSubmit;
