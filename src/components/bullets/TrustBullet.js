import React from 'react';
import './TrustBullet.css';

const TrustBullet = (props) => {
	return (
		<div className="trustBullet">
			<i className={props.iconClass} />
			<p>{props.descTop}</p>
			<p>{props.descBot}</p>
		</div>
	);
};

export default TrustBullet;
