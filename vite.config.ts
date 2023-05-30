import { defineConfig } from 'vite';
import { crx } from '@crxjs/vite-plugin';
import preact from '@preact/preset-vite';
import zipPack from 'vite-plugin-zip-pack';
import manifest from './src/manifest';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      emptyOutDir: true,
      outDir: 'build',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/chunk-[hash].js',
        },
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'es2020',
      },
    },
    esbuild: {
      // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
      logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
    plugins: [
      crx({ manifest }),
      preact({
        babel: {
          plugins: ['babel-plugin-macros', 'babel-plugin-styled-components'],
        },
      }),
      zipPack({
        outDir: `package`,
        inDir: 'build',
        // @ts-ignore
        outFileName: `${
          manifest.short_name ?? manifest.name.replaceAll(' ', '-')
        }-extension-v${manifest.version}.zip`,
      }),
    ],
  };
});
