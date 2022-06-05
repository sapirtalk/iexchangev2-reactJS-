// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBCAGrZUW8TJeBHgQS4s-scLgGD56YWUJc',
	authDomain: 'iexchange-53bb3.firebaseapp.com',
	projectId: 'iexchange-53bb3',
	storageBucket: 'iexchange-53bb3.appspot.com',
	messagingSenderId: '558397119420',
	appId: '1:558397119420:web:485c6d1112218c383729b9',
	measurementId: 'G-R62NZRCWK1'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);
export default storage;
