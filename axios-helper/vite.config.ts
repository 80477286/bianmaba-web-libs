import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path, {resolve} from 'path'
//接口mock服务器
import {viteMockServe} from 'vite-plugin-mock';
//压缩，混淆
import vitePluginCompression from 'vite-plugin-compression';

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from "unplugin-vue-components/resolvers"
import {fileURLToPath, URL} from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            dts: 'example/auto-imports.d.ts'
        }), vitePluginCompression({
            ext: '.gz',
            filter: /\.(js|mjs|ts|json|css|html)$/i,
            algorithm: 'gzip',
            threshold: 5120
        }),
        Components({
            resolvers: [ElementPlusResolver()],
            dts: 'example/components.d.ts',
            dirs: 'example/components'
        }),
        /**
         * mockPath：mock文件目录
         * localEnabled：开发环境mock开关
         * prodEnabled：生产环境mock开关
         */
        viteMockServe({
            mockPath: './example/mock',
            localEnabled: true,
            prodEnabled: false,
            ignore: /^\_/
        })],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        }
    },
    server: {
        host: '0.0.0.0',
        port: 8082
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, './src/index.ts'),
            name: 'index',
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue', 'axios', 'element-plus', '@bianmaba/utils'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue',
                    axios: 'Axios',
                    'element-plus': 'ElementPlus',
                    '@bianmaba/utils': 'BianmabaUtils'
                }
            }
        }
    }
})
