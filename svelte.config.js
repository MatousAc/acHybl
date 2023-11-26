import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	onwarn: (warning, handler) => {
		if (warning.code.startsWith('a11y-')) {
			return;
		}
		handler(warning);
	},
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		files: {
			assets: 'src/assets',
			routes: 'src/routes'
		},
		alias: {
			// this will match a directory and its contents
			// (`my-directory/x` resolves to `path/to/my-directory/x`)
			comp: './src/components',
			ts: './src/ts',
			css: './src/css',
			tp: './src/components/testimonyPieces',
			pp: './src/components/projectPieces'
		}
	}
};

export default config;
