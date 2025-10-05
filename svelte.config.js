import adapterVercel from '@sveltejs/adapter-vercel';
import adapterNode from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter:
			adapterVercel() || adapterNode(),
		files: {
			assets: 'static'
		}
	}
};

export default config;
