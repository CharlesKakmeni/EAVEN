import { defineConfig } from 'astro/config';

export default defineConfig({
  server: { port: 4321, host: true },
  build: { format: 'directory' },
  devToolbar: {
    enabled: false,
  },
  alias: {
    // Permet d'importer depuis "@/..." partout dans le projet
    '@': './src',
  },
});
