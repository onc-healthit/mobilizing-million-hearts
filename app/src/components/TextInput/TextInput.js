import React from 'react';

const TextInput = (props) => {
	const { value, onChange, rows, cols, style, label, min, max, notFound, outOfRange } = props;
	const outOfRangeOrNotFound = value < min || value > max || !value;

	return (
		<React.Fragment>
			<p className="mb-1" style={{ fontWeight: 'bold', fontSize: '14px' }}>
				{label}
			</p>
			<textarea onChange={onChange} rows={rows} cols={cols} style={style} value={value} />
			<div
				style={{
					fontSize: '10px',
					color: 'red',
					fontWeight: 'bold',
					visibility: outOfRangeOrNotFound ? 'visible' : 'hidden',
				}}
			>
				{!value ? notFound : outOfRange}
			</div>
		</React.Fragment>
	);
};

export default TextInput;
