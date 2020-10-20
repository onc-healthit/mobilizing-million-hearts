import React from 'react';

import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';

const { Handle: SliderHandle } = Slider;

const Handle = (props) => {
	const { value, dragging, index, ...restProps } = props;
	return (
		<Tooltip
			prefixCls="rc-slider-tooltip"
			overlay={value}
			visible={dragging}
			placement="top"
			key={index}
		>
			<SliderHandle value={value} {...restProps} />
		</Tooltip>
	);
};

export default Handle;
