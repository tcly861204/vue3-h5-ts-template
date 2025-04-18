import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import { join } from 'node:path'
import { cwd } from 'node:process'
const root: string = cwd()
export default defineConfig(({ mode }) => {
  return {
    mode,
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: true,
    },
    resolve: {
      alias: {
        "@": join(root, 'src')
      }
    },
    plugins: [
      vue(),
      AutoImport({ resolvers: [VantResolver()] }),
      Components({ resolvers: [VantResolver()] })
    ],
  }
})
