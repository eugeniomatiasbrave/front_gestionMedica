import adapterVercel from '@sveltejs/adapter-vercel';
import adapterNode from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter:
			adapterVercel({
				runtime: 'nodejs20.x',
				regions: ['iad1'],
				split: false
			}) || adapterNode(),
		files: {
			assets: 'static'
		}
	}
};

export default config;
