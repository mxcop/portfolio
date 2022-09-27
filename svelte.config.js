import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

    alias: {
      // Data Management Directory
      '$data/*': './src/data/*',
      // Page Sections Directory
      '$sections/*': './src/lib/sections/*',
      // Svg Assets Directory
      '$svg/*': './src/assets/svg/*'
    }
	}
};

export default config;
