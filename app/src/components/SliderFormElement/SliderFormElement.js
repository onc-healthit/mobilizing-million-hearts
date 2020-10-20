import React from 'react';
import Slider from 'rc-slider';

import Handle from '../Handle/Handle';

export default class SliderFormElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submitting: false,
		};
	}

	handleSliderChange = (val) => {
		const { cb } = this.props;
		cb(val);
	};

	handleChange(e) {
		const re = /^[0-9\b]+$/;
		// if value is not blank, then test the regex
		if (e.target.value === '' || re.test(e.target.value)) {
			const toInt = parseInt(e.target.value, 10);
			this.callback(e.target.value === '' ? '' : toInt);
		}
	}

	callback(newVal) {
		const { submitting } = this.state;
		const { audit, cb } = this.props;
		if (!submitting) {
			this.setState({ submitting: true });
			setTimeout(() => {
				const { name, value } = this.props;
				audit({ subName: name, content: `${value}` });
				this.setState({ submitting: false });
			}, 2000);
		}
		return cb(newVal);
	}

	audit(e) {
		const { name, audit } = this.props;
		return audit({ subName: name, content: `${e}` });
	}

	render() {
		const { value, min, max, name, notFound, outOfRange } = this.props;
		const outOfRangeOrNotFound = value < min || value > max || !value;
		const borderColor = outOfRangeOrNotFound ? 'red' : 'black';

		const focusStyle = {
			borderColor: `1px solid ${borderColor}`,
			boxShadow: `0 0 3px ${borderColor} !important`,
			mozBoxShadow: `0 0 3px ${borderColor} !important`,
			webkitBoxShadow: `0 0 3px ${borderColor} !important`,
		};

		return (
			<div className="col-md-6 pt-0 pb-0 pl-3 pr-3">
				<div className="row mt-3 mb-2">
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-8 " style={{ fontWeight: 'bold', fontSize: '14px' }}>
								<p className="ml-2">
									{name}
									<div
										style={{
											fontSize: '10px',
											color: 'red',
											visibility: outOfRangeOrNotFound ? 'visible' : 'hidden',
										}}
									>
										{!value ? notFound : outOfRange}
									</div>
								</p>
							</div>
							<div className="col-md-4">
								<div style={{ textAlign: 'right' }}>
									<textarea
										type="number"
										style={{
											textAlign: 'center',
											fontSize: '14px',
											overflow: 'hidden',
											resize: 'none',
											...focusStyle,
										}}
										value={value}
										onInput={this.handleChange.bind(this)}
										rows="1"
										cols="4"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-12 mb-2">
					<Slider
						marks={{ [min]: min, [max]: max }}
						min={min}
						max={max}
						defaultValue={value}
						value={value}
						handle={Handle}
						onChange={this.handleSliderChange}
						onAfterChange={(e) => this.audit(e)}
					/>
				</div>
			</div>
		);
	}
}
