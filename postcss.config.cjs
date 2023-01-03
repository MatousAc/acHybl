const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
// const postcssPresentEnv = require('postcss-present-env');
const { trusted } = require('svelte/internal');

const config = {
	plugins: [
    // postcssPresentEnv({
    //   stage:3,
    //   features: {
    //     'nesting-rules': true,
    //     'custom-media-queries': true,
    //     'media-query-ranges': true
    //   }
    // }),
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer
	]
};

module.exports = config;
