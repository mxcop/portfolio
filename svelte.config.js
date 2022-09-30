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
      // default options are shown
      pages: "build",
      assets: "build",
      fallback: "index.html",
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
			base: dev ? '' : '/portfolio',
		},
	}
};

export default config;
