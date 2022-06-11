import React from 'react';
import './Slide.css';

export default function Slide(props) {
	return (
		<div className="slide">
			<img src={props.image} alt="slide" />
			<p>{props.desc}</p>
		</div>
	);
}
