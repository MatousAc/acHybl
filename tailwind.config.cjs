const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [],
	future: {
		purgeLayersByDefault: true,
		removeDeprecatedGapUtilities: true
	},
	// force-loading styles
	safelist: [
		'border-l-4',
		'border-r-4',
		'pr-20',
		'pl-20',
		'items-end',
		'items-start',
		'mr-20',
		'ml-20'
	]
};

module.exports = config;
