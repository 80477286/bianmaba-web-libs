import {defineConfig} from 'vite'
import * as path from "path";
import vitePluginCompression from "vite-plugin-compression";
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue(),
        vitePluginCompression({
            ext: '.gz',
            filter: /\.(js|mjs|ts|json|css|html)$/i,
            algorithm: 'gzip',
            threshold: 5120
        }), dts({entryRoot: "./packages", outputDir: ["dist/types"]})],
    build: {
        sourcemap: true,
        cssCodeSplit: true,
        lib: {
            entry: path.resolve(__dirname, './packages/index.ts'),
            name: 'bmb-view',
            fileName: (format) => `${format}/index.js`
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {}
            }
        }
    }
})