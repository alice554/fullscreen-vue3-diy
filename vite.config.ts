import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    lib:{
      entry:'src/index.ts',
      name:'fullscreen',
      fileName:'index'
    },
    rollupOptions:{
      output:{
        globals:{
          vue:'Vue'
        }
      },
      external:[vue]
      // external: ['vue', 'lodash'],
    }
  }
})
