import adapterVercel from '@sveltejs/adapter-vercel';
import adapterNode from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapterVercel({
			runtime: 'nodejs18.x',
			regions: ['iad1'], 
			split: false // mantiene todas las rutas en una sola función por defecto
		}) || adapterNode(),
		files: {
            assets: 'static'
        }
	}
};

export default config;

// ok