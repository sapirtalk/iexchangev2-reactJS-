import { storage } from './firebaseConfig';
import { ref, uploadBytesResumable } from 'firebase/storage';

/**
 * handles the details sumbit to FireBase Storage
 * @param   {list} data  List of the user's details 
 */

function handleSubmit(data) {
	const idRef = ref(storage, `/users/${data.firstName}_${data.LastName}/id_passport`);
	const selfieRef = ref(storage, `/users/${data.firstName}_${data.LastName}/selfie`);

	const dataRef = ref(storage, `/users/${data.firstName}_${data.LastName}/details`);

	const details = [
		`
        First name: ${data.firstName}\n
        Last name: ${data.LastName}\n
        Email: ${data.email}\n
        Phone: ${data.mobilePrefix} ${data.mobile}\n
        Bank address: ${data.accCountry}\n
        Heading to: ${data.toCountry}\n

        Amount: ${data.prefixFrom}${data.amount}\n
        From currency: ${data.from}\n
        To currency: ${data.to}\n
        Outcome : ${data.prefixTo}${data.outcome}\n
        ExchangeRate : ${data.exchangeRate}\n
        Was created on : ${data.issueDate}\n

        TRANSACTION CODE : ${data.transCode}

    
    `
	];

	const dataFile = new Blob(details, {
		type: 'text/plain'
	});

	uploadBytesResumable(idRef, data.idPic);
	uploadBytesResumable(selfieRef, data.selfie);
	uploadBytesResumable(dataRef, dataFile);
}

export default handleSubmit;
