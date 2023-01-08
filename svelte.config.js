import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
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
    alias: {
      // this will match a directory and its contents
      // (`my-directory/x` resolves to `path/to/my-directory/x`)
      'comp': './src/components'
    }
	}
};

export default config;
