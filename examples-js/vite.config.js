
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
//接口mock服务器
import {viteMockServe} from 'vite-plugin-mock';

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from "unplugin-vue-components/resolvers"
import {resolve} from "path";

export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 8081
    },
    plugins: [vue(), AutoImport({
        resolvers: [ElementPlusResolver()],
        dts: 'auto-imports.d.ts'
    }),
        Components({
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
        })],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        }
    }
})
