import React, { Component } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

export default class ButtonGroupElement extends Component {
	async callback(newValue) {
		const { name, audit, cb, selected } = this.props;
		const options = {
			subName: name,
			content: `Selected ${newValue}`,
		};
		if (selected !== newValue) {
			audit(options);
		}
		return cb(newValue);
	}

	render() {
		const { values, selected, name } = this.props;
		const buttons = values.map((ele) => {
			const onClick = (e) => {
				const newValue = e.target.value;
				this.callback(newValue);
			};

			return (
				<ToggleButton onChange={onClick} value={ele} type="button" className="btn btn-secondary">
					{ele}
				</ToggleButton>
			);
		});
		return (
			<div className="col-md-4">
				<p className="mb-1" style={{ fontWeight: 'bold', fontSize: '14px' }}>
					{name}
				</p>
				<ToggleButtonGroup style={{ fontSize: '14px' }} type="checkbox" size="sm" value={selected}>
					{buttons}
				</ToggleButtonGroup>
			</div>
		);
	}
}
