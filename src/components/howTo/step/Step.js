import React from 'react';
import './Step.css';

export default function Step(props) {
	return (
		<div className="step">
			<div className="step-topRow">
				<div className="step-imageNum-container">
					<img src={props.numImg} alt={props.altNum} />
				</div>
				<div className="heading">
					<p>{props.heading}</p>
				</div>
				<div className="step-image-container">
					<img src={props.image} alt={props.alt} />
				</div>
			</div>
			<div className="step-desc-container">
				<p>desc</p>
			</div>
		</div>
	);
}
