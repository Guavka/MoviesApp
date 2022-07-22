/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';

import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Inspect from 'vite-plugin-inspect';


const srcURL = new URL('./src', import.meta.url)
const srcPath = fileURLToPath(new URL('src', import.meta.url))
const autoImportPath = fileURLToPath(new URL('configs/autoImport', srcURL))

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom'
  },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'pinia'
      ],
      eslintrc: {
        enabled: true,
        filepath: path.resolve(autoImportPath, '.eslintrc-auto-import.json'),
      },
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({ prefix: 'Icon' }),
      ],
      dts: path.resolve(autoImportPath, 'auto-imports.d.ts'),
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({ enabledCollections: ['ep'] }),
      ],
      dts: path.resolve(autoImportPath, 'components.d.ts'),
    }),
    Icons({
      autoInstall: true,
    }),
    Inspect(),
  ],
  resolve: {
    alias: {
      '@': srcPath,
    },
  },

});
