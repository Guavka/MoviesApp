import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Inspect from 'vite-plugin-inspect'

const pathSrc = path.resolve(__dirname, 'src')
const autoImportPath = path.resolve(__dirname, 'configs/autoImport')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'pinia',
      ],
      eslintrc: {
        enabled: true,
        filepath: path.resolve(autoImportPath, '.eslintrc-auto-import.json')
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
        IconsResolver({ enabledCollections: ['ep'], }),
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
      '@': pathSrc,
    },
  },
})