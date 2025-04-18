import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { VantResolver } from "@vant/auto-import-resolver"
import tailwindcss from "@tailwindcss/vite"
import { join } from "node:path"
import { cwd } from "node:process"
const root: string = cwd()
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, root)
  const isProd = mode !== "development"
  return {
    base: env.VITE_BUILD_BASE || "/",
    mode,
    server: {
      host: env.VITE_APP_HOST,
      port: Number(env.VITE_APP_PORT),
      open: true
    },
    resolve: {
      alias: {
        "@": join(root, "src")
      }
    },
    plugins: [
      vue(),
      tailwindcss(),
      AutoImport({ resolvers: [VantResolver()] }),
      Components({ resolvers: [VantResolver()] })
    ],
    build: {
      outDir: env.VITE_BUILD_OUTDIR || "dist",
      assetsDir: env.VITE_BUILD_ASSETS_DIR || "assets",
      emptyOutDir: true,
      cssCodeSplit: true,
      sourcemap: false,
      manifest: false,
      brotliSize: true,
      chunkSizeWarningLimit: 300,
      terserOptions: {
        compress: {
          drop_console: isProd,
          drop_debugger: isProd
        }
      },
      rollupOptions: {
        output: {
          entryFileNames: env.VITE_BUILD_ASSETS_DIR + "/js/[name]-[hash].js",
          chunkFileNames: env.VITE_BUILD_ASSETS_DIR + "/js/[name]-[hash].js",
          assetFileNames:
            env.VITE_BUILD_ASSETS_DIR + "/[ext]/[name]-[hash].[ext]"
        }
      }
    }
  }
})
