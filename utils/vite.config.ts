import {defineConfig} from 'vite'
import * as path from "path";
import vitePluginCompression from "vite-plugin-compression";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vitePluginCompression({
        ext: '.gz',
        filter: /\.(js|mjs|ts|json|css|html)$/i,
        algorithm: 'gzip',
        threshold: 5120
    })],
    build: {
        lib: {
            entry: path.resolve(__dirname, './index.ts'),
            name: 'index',
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: [],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {}
            }
        }
    }
})