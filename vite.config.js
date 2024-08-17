import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        outDir: './build', 
        rollupOptions: {
          output: { // entry chunk assets それぞれの書き出し名の指定
            entryFileNames: 'js/index.js',
            assetFileNames: 'css/style.css'
          },
        },
    },
})