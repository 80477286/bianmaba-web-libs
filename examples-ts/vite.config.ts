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

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 8080
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
        outDir: "dist",
        assetsDir: "static",
        assetsInlineLimit: 4096,
        cssCodeSplit: true,
        sourcemap: false,
        chunkSizeWarningLimit: 500,
        emptyOutDir: true,
        minify: "terser",
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split("node_modules/")[1].split('/')[0].toString();
                    }
                },
                chunkFileNames: (chunkInfo) => {
                    const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
                    const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
                    return `js/${fileName}/[name].[hash].js`;
                }
            }
        }
    }
})
