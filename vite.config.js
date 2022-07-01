import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    css: {
      // 配置全局的scss文件,vite不需要安装sass-loader
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/variable.scss";
        `
        }
      }
    },
    server: {
      open: true
    }
  }
})
