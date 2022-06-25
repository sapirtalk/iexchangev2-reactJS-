import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACKING_ID);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
