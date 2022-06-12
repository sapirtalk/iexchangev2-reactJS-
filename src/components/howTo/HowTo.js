import React from 'react';
import Step from './step/Step';
import './HowTo.css';
import stepProps from './stepProps';

export default function HowTo() {
	return (
		<div className="howTo">
			<div className="howTo-heading">
				<p>How do i use the service?</p>
			</div>
			<div className="howTo-steps">
				{stepProps.map((props, index) => (
					<Step
						numImg={props.numImg}
						image={props.image}
						altNum={props.altNum}
						alt={props.alt}
						heading={props.heading}
						body={props.body}
						key={index}
					/>
				))}
			</div>
		</div>
	);
}
