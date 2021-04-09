import { defineConfig, loadEnv } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'
import fs from 'fs'
// @ts-ignore
import lessToJS from 'less-vars-to-js'


const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './config/variables.less'), 'utf8')
)

const env = process.argv[process.argv.length - 1]

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    base: loadEnv(mode, process.cwd()).VITE_BASE_URL,
    plugins: [
      reactRefresh(),
      vitePluginImp({
        libList: [
          {
            libName: 'antd',
            style: (name) => `antd/lib/${name}/style/index.less`
          }
        ]
      })],
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
          // 重写 less 变量，定制样式
          modifyVars: themeVariables,
          // 全局less
          additionalData: '@import "./src/assets/style/index.css";'
        }
      }
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, './src')
      }
    },
    optimizeDeps: {
      // include: ['echarts']
    },
    server: {
      host: process.env.VITE_HOST,
      port: Number(process.env.VITE_PORT),
      // 是否自动在浏览器打开
      open: false,
      // 是否开启 https
      https: false,
      // 反向代理
      proxy: {
        api: {
          target: 'http://www.baidu.com',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, '')
        }
      }
    },
    build: {
      // 压缩
      minify: 'esbuild',
      /**
       * Directory relative from `root` where build output will be placed. If the
       * directory exists, it will be removed before the build.
       * @default 'dist'
       */
      outDir: process.env.VITE_OUTPUT_DIR,
      polyfillDynamicImport: true
    },
  })
)
