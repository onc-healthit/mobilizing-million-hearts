import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import React from 'react';

const FormElement = (props) => {
	const { value, notFound, outOfRange, dateHover, name, date, min, max, loading, padding } = props;

	// TODO extract "--" to constants
	const isOutOfRange = value < min || value > max;
	const missing = !value || value === '--';

	if (dateHover) {
		return (
			<div className="row mt-2 mb-2">
				<div className="col-md-10" style={{ fontWeight: 'bold', fontSize: '14px' }}>
					{props.name}
					<div
						style={{
							fontSize: '10px',
							color: 'red',
							visibility: !loading && (isOutOfRange || missing) ? 'visible' : 'hidden',
						}}
					>
						{missing ? notFound : outOfRange}
					</div>
				</div>
				<div className="col-md-2" style={{ textAlign: 'right', fontSize: '14px' }}>
					<OverlayTrigger
						placement="left"
						overlay={<Tooltip id="tooltip-date-hover">{date}</Tooltip>}
					>
						<div>{value}</div>
					</OverlayTrigger>
				</div>
			</div>
		);
	}
	if (name === 'Last Updated:') {
		return (
			<div className="row">
				<div className="col-md-8" style={{ fontWeight: 'bold', fontSize: '12px' }}>
					{name}
				</div>
				<div className="col-md-4" style={{ textAlign: 'right', fontSize: '12px' }}>
					{value}
				</div>
			</div>
		);
	}
	return (
		<div className="row mt-2 mb-2">
			<div
				className="col-md-8"
				style={{ fontWeight: 'bold', fontSize: '14px', paddingTop: padding }}
			>
				{name}
				<div
					style={{
						fontSize: '10px',
						color: 'red',
						visibility: !loading && (isOutOfRange || missing) ? 'visible' : 'hidden',
					}}
				>
					{missing ? notFound : outOfRange}
				</div>
			</div>
			<div
				className="col-md-4"
				style={{ textAlign: 'right', fontSize: '14px', paddingTop: padding }}
			>
				{value}
			</div>
		</div>
	);
};

export default FormElement;
