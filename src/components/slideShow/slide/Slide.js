import React from 'react';
import './Slide.css';

export default function Slide(props) {
	return (
		<div className="slide">
			<div className="slide-stars">
				<img src={props.image} alt="slide" />
				<img src={props.image} alt="slide" />
				<img src={props.image} alt="slide" />
				<img src={props.image} alt="slide" />
				<img src={props.image} alt="slide" />
			</div>
			<div className="slide-desc">
				<p>{props.desc}</p>
				<p style={{ fontWeight: 500 }}>{props.name}</p>
			</div>
		</div>
	);
}
