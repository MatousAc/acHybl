const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				wideMobile: {
					raw: `only screen and (max-height: 480px) and (max-width: 960px) and (orientation: landscape)`
				}
			}
		}
	},

	plugins: [],
	future: {
		purgeLayersByDefault: true,
		removeDeprecatedGapUtilities: true
	},
	// force-loading styles
	safelist: [
		// { pattern: /border-(l|r)-2/ },
		// { pattern: /(lg:m|p|m)(l|r)-20/ },
		// { pattern: /items-(start|end)/ },
		'border-l-2',
		'border-r-2',
		'lg:mr-40',
		'lg:ml-40',
		'pr-20',
		'pl-20',
		'items-end',
		'items-start',
		'mr-20',
		'ml-20'
	]
};

module.exports = config;
