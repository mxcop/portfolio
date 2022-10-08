import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null
    }),

    alias: {
      // Data Management Directory
      '$data/*': './src/data/*',
      // Page Sections Directory
      '$sections/*': './src/lib/sections/*',
      // Svg Assets Directory
      '$svg/*': './src/assets/svg/*'
    },

    paths: {
			base: dev ? '' : '',
		},
	},
};

export default config;
