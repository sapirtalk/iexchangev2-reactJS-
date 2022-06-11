import React from 'react';

import './Bullet.css';
/**
 * bullet Component.
 *
 * @component
 * 
 * @props desc, image
 * @example
 * const image = img.png
 * const desc = "some description"
 * 
 */

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
