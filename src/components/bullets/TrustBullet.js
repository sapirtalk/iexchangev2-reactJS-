import React from 'react';
import './TrustBullet.css';

const TrustBullet = (props) => {
	return (
		<div className="trustBullet">
			{/* <img src={props.image} alt="secure" /> */}
			<i class={props.iconClass} />
			<p>{props.descTop}</p>
			<p>{props.descBot}</p>
		</div>
	);
};

export default TrustBullet;
