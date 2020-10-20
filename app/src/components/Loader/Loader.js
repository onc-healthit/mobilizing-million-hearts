import LoadingOverlay from 'react-loading-overlay';
import React from 'react';

export default function Loader({ active, children }) {
	return (
		<LoadingOverlay
			active={active}
			styles={{
				overlay: (base) => ({
					...base,
					background: 'rgba(142, 142, 142, 0.49)',
				}),
			}}
			spinner
		>
			{children}
		</LoadingOverlay>
	);
}
