import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  root: __dirname,
  cacheDir: '../node_modules/.vite/libs',
  resolve: {
    alias: {
      '@src': '/src',
      '@ui': '/src/ui',
      '@style': '/src/style',
      '@assets': '/src/assets',
    },
  },
  plugins: [
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
      include: [
        'src/*.ts',
        'src/*.tsx',
        'src/*.js',
        'src/ui/**/*.ts',
        'src/ui/**/*.tsx',
        'src/ui/**/*.js',
        'src/assets/*.ts',
        'src/assets/*.tsx',
        'src/assets/*.js',
      ],
    }),
    svgr(),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: './dist/lib',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      name: 'libs',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // external: ["'react'", "'react-dom'", "'react/jsx-runtime'"],
      external: ['react', 'react-dom'],
      // output: {
      //   globals: {
      //     react: 'React',
      //     'react-dom': 'ReactDOM',
      //   },
      // },
    },
  },
});
