/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { join } from 'path';

export default defineConfig({
  root: __dirname,
  cacheDir: './node_modules/.vite/AUO-DED-WDS',
  resolve: {
    alias: {
      '@src': '/libs/src',
      '@ui': '/libs/src/ui',
      '@style': '/libs/src/style',
      '@assets': '/libs/src/assets',
      '@app': '/src',
    },
  },

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
    nxViteTsPaths(),
    svgr(),
    dts({
      entryRoot: 'src',
      tsconfigPath: join(__dirname, 'tsconfig.json'),
      include: ['src/ui/**/*.ts', 'src/ui/**/*.js'],
      outDir: 'build/app',
      // insertTypesEntry: true,
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: './build/app',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    // lib: {
    //   entry: resolve(__dirname, 'src/ui/index.js'),
    //   name: 'ui',
    //   formats: ['es', 'cjs', 'umd'],
    //   fileName: (format) => `ui.${format}.js`,
    // },
  },

  test: {
    watch: false,
    globals: true,
    cache: {
      dir: './node_modules/.vitest/AUO-DED-WDS',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: './coverage/AUO-DED-WDS',
      provider: 'v8',
    },
  },
});
