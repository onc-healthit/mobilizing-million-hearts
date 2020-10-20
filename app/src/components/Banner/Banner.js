import React from 'react';
import RiskCard from '../RiskCard/RiskCard';

const Banner = (props) => {
	const { estimatedRisk, riskText, color } = props;
	return (
		<React.Fragment>
			<div className="col-md-12 text-center" style={{ fontSize: '14px' }}>
				Risk of Having a Heart Attack or Stroke within 10 Years
			</div>
			<div className="col-md-12 pt-3 pb-3">
				<RiskCard risk={estimatedRisk} riskText={riskText} backgroundColor={color} />
			</div>
		</React.Fragment>
	);
};

export default Banner;
