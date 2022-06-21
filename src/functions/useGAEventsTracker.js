import React from 'react';
import ReactGA from 'react-ga';

export const useGAEventsTracker = (catagory = 'Event Catagory') => {
	const trackEvent = (action = 'action', label = 'label') => {
		ReactGA.event({ catagory, action, label });
	};
	return trackEvent;
};
