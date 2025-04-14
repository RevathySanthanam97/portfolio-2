import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from "path"

export default defineConfig({
  plugins: [
    svgr(),
    react()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${path.resolve(__dirname, 'src/styles/responsiveness.scss')}" as *;`
      },
    },
  }
});
