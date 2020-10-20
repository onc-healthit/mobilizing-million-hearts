module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					browsers: ['> 1%', 'last 2 versions', 'ie >= 10'],
				},
				corejs: '2',
				useBuiltIns: 'entry',
			},
		],
	],
};
