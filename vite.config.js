import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
  server: {
    fs: {allow: ['./resources']},
  }
};

export default config;
