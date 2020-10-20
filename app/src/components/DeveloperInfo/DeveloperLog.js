import * as _ from 'lodash';

import React from 'react';

export default function DeveloperInfo(props) {
	return (
		<div>
			{props.log.map((val) => {
				return (
					<div className="row">
						<div className="col-md-6">{_.toString(JSON.stringify(val))}</div>
					</div>
				);
			})}
		</div>
	);
}
