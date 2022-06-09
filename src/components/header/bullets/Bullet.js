import React from 'react';
import './Bullet.css';

export default function Bullet(props) {
	return (
		<div className="bullet">
			<img src={props.image} alt="bullet" />
			<div className="desc">
				<p>{props.desc}</p>
			</div>
		</div>
	);
}
