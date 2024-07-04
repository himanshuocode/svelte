import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
    fallback: '200.html',
      precompress: false,
      strict: true
    }),
    prerender: {
      handleHttpError: ({ status, path, referrer, referenceType }) => {
        if (path.startsWith('/products')) {
          return; // suppress the error for /products
        }

        throw new Error(`Failed to prerender ${path}: ${status}`);
      },
      entries: [
        '/',
        '/categories',
        // '/products'
      ]
    }
  }
};

export default config;
