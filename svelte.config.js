import adapter from '@sveltejs/adapter-auto';
import adapternetlify from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */  
const config = {
  kit: {
    adapter: adapternetlify()
  },
  preprocess: vitePreprocess()
};
export default config;