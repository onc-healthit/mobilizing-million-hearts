import React from 'react';

import { Card } from 'react-bootstrap';

const RiskCard = (props) => {
	const { risk, riskText } = props;
	if (risk && riskText) {
		return (
			<Card style={{ backgroundColor: props.backgroundColor }}>
				<Card.Body className="text-center">
					<h1 style={{ fontSize: '20px' }}>{risk}%</h1>
					<h1 style={{ fontSize: '20px' }}>{riskText}</h1>
				</Card.Body>
			</Card>
		);
	}
	return null;
};

export default RiskCard;
