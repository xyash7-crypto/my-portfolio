import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import studioCMS from 'studiocms';

// https://astro.build/config
export default defineConfig({
	site: process.env.VERCEL_PROJECT_PRODUCTION_URL
		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
		: 'http://localhost:4321',
	output: 'server',
	adapter: vercel(),
	integrations: [studioCMS()],
});
