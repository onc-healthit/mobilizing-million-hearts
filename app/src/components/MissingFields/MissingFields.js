import React from 'react';

export default function MissingFields(props) {
	const { simple, fields } = props;
	return (
		<div className="col-md-12 text-center" style={{ fontSize: '14px' }}>
			<div className="alert alert-danger" role="alert">
				<h2>Cannot Calculate Risk</h2>
				{!simple ? (
					<ul>
						{fields.map((field) => (
							<li>{field}</li>
						))}
					</ul>
				) : null}
			</div>
		</div>
	);
}
