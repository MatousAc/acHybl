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
		'border-l-2',
		'border-r-2',
		'lg:mr-20',
		'lg:ml-20',
		'pr-20',
		'pl-20',
		'items-end',
		'items-start',
		'mr-20',
		'ml-20'
	]
};

module.exports = config;
