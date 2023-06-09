import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
//接口mock服务器
import {viteMockServe} from 'vite-plugin-mock';

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from "unplugin-vue-components/resolvers"
import {resolve} from "path";
//浏览器版本兼容
import legacyPlugin from '@vitejs/plugin-legacy'

export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 8081
    },
    plugins: [vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            dts: 'auto-imports.d.ts'
        }), Components({
            resolvers: [ElementPlusResolver()],
            dts: 'components.d.ts',
            dirs: 'components'
        }),
        /**
         * mockPath：mock文件目录
         * localEnabled：开发环境mock开关
         * prodEnabled：生产环境mock开关
         */
        viteMockServe({
            mockPath: './mock',
            localEnabled: true,
            prodEnabled: false,
            ignore: /^\_/
        }),
        legacyPlugin({
            targets: ['Chrome >=51', 'Firefox >=54', 'Safari >=10', 'Edge >=79', 'not IE 11'],
        })],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        }
    },
    build: {
        "outDir": "dist",
        "assetsDir": "static",
        "assetsInlineLimit": 4096,
        "cssCodeSplit": true,
        "sourcemap": false,
        "chunkSizeWarningLimit": 500,
        "emptyOutDir": true,
        "minify": "terser"
    }
})
