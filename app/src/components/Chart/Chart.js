import 'chartjs-plugin-annotation';

import { Bar } from 'react-chartjs-2';
import React from 'react';

const getOffset = (risk) => {
	const max = 50;
	let offSet = 0;
	let value = risk;
	if (risk < 4) {
		offSet = 9 - risk;
	} else if (risk >= max) {
		value = max;
		offSet = -9;
	} else if (risk >= max - 4) {
		offSet = max - 4 - risk;
	}
	return { value, offSet };
};

export default function Chart(props) {
	const { oldRisk, estimatedRisk } = props;

	const yAdjustActual = getOffset(oldRisk);
	const yAdjustEstimate = getOffset(estimatedRisk);

	const options = {
		animation: {
			duration: 0,
		},
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						steps: 10,
						stepValue: 5,
						max: 50,
						callback(label) {
							if (label === 50) {
								return `>= ${label}%`;
							}
							return `${label}%`;
						},
					},
					scaleLabel: {
						display: true,
						labelString: 'Risk',
					},
					stacked: true,
				},
			],
			xAxes: [{ stacked: true }],
		},
		tooltips: {
			enabled: false,
		},
		title: {
			display: true,
			text: 'Risk of Having a Heart Attack within 10 Years',
		},
		legend: {
			display: false,
		},
		annotation: {
			drawTime: 'afterDatasetsDraw',
			annotations: [
				{
					id: 'my-risk-annotation',
					type: 'line',
					mode: 'horizontal',
					scaleID: 'y-axis-0',
					value: yAdjustActual.value,
					borderColor: 'black',
					borderWidth: 2,
					label: {
						backgroundColor: 'rgb(65, 131, 215)',
						content: 'Actual Risk',
						enabled: true,
						position: 'right',
						yAdjust: -yAdjustActual.offSet,
					},
				},
				{
					id: 'estimated-risk-annotation',
					type: 'line',
					mode: 'horizontal',
					scaleID: 'y-axis-0',
					value: yAdjustEstimate.value,
					borderColor: 'black',
					borderWidth: 2,
					borderDash: [3, 3],
					label: {
						backgroundColor: 'rgb(191, 85, 236)',
						content: 'Estimated Risk',
						enabled: true,
						position: 'left',
						yAdjust: -yAdjustEstimate.offSet,
					},
				},
			],
		},
	};

	const chartCutoffs = {
		labels: [''],
		datasets: [
			{
				label: 'Low',
				data: [5],
				backgroundColor: 'rgb(46, 204, 113)',
			},
			{
				label: 'Mild',
				data: [2.5],
				backgroundColor: 'rgb(255, 255, 126)',
			},
			{
				label: 'Moderate',
				data: [12.5],
				backgroundColor: 'rgb(252, 185, 65)',
			},
			{
				label: 'High',
				data: [85],
				backgroundColor: 'rgb(246, 71, 71)',
			},
		],
	};

	return <Bar data={chartCutoffs} width={100} height={50} options={options} redraw />;
}
