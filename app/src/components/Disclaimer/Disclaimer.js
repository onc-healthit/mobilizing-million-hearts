import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { riskEnhancingFactors } from '../../config';

const risks = [
	"The calculator estimates a patient's 10-year ASCVD risk at an initial visit.",
	'It is not validated for extreme risk factor values.',
	'It can underestimate and overestimate risk in other ethnic groups or socioeconomic groups and thus: ' +
		'is not intended to be a substitute for clinical judgment.',
	'The calculator is a starting point for ASCVD risk assessment and has not been validated ' +
		'for use in serial assessment, for example: using post-treatment values.',
	'Clinical tools such as coronary CT calcium scoring may be appropriate to further refine ' +
		'the risk assessment.',
];

const renderTooltip = (props) => {
	return (
		<Tooltip {...props}>
			<ul style={{ paddingLeft: '15px', marginBottom: '5px' }}>
				{risks.map((risk) => (
					<li>{risk}</li>
				))}
			</ul>
		</Tooltip>
	);
};
const Disclaimer = () => {
	return (
		<p style={{ fontSize: '12px', fontWeight: 'bold' }}>
			This calculation is based on asymptomatic, normative population samples and is not intended to
			be a substitute for clinical judgment. Estimates of 10-year risk for ASCVD are based on data
			from multiple community-based populations and are applicable to African-American and
			non-Hispanic white men and women 40 through 79 years of age. A number of{' '}
			<a href={riskEnhancingFactors} target="_blank" rel="noopener noreferrer">
				risk enhancing factors
			</a>{' '}
			for clinical decision making should also be considered.{' '}
			<OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
				<i className="fas fa-question-circle" aria-hidden="true" />
			</OverlayTrigger>
		</p>
	);
};

export default Disclaimer;
