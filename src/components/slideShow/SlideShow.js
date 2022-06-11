import React, { useState, useEffect, useRef } from 'react';
import Slide from './slide/Slide';
import slidesProps from '../userForm/SlidesProps';
import './SlideShow.css';

export default function SlideShow() {
	const [ index, setIndex ] = useState(0);
	const timeoutRef = useRef(null);
	const delay = 4000;

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	useEffect(
		() => {
			resetTimeout();
			timeoutRef.current = setTimeout(
				() => setIndex((prevIndex) => (prevIndex === slidesProps.length - 1 ? 0 : prevIndex + 1)),
				delay
			);
			return () => {
				resetTimeout();
			};
		},
		[ index ]
	);

	return (
		<div className="slideshow">
			<div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
				{slidesProps.map((props, index) => (
					<div className="slider">
						<Slide image={props.image} desc={props.desc} key={index} />
					</div>
				))}
			</div>
			<div className="slideshowDots">
				{slidesProps.map((_, idx) => (
					<div
						key={idx}
						className={`slideshowDot${index === idx ? ' active' : ''}`}
						onClick={() => {
							setIndex(idx);
						}}
					/>
				))}
			</div>
		</div>
	);
}
