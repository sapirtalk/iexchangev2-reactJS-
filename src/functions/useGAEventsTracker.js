import ReactGA from 'react-ga';

export const useGAEventsTracker = (category = 'Event Catagory') => {
	const trackEvent = (action = 'action', label = 'label') => {
		ReactGA.event({ category, action, label });
		console.log('event noted');
	};
	return trackEvent;
};
