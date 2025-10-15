import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      exclude: ['stories/**'],
      compilerOptions: {
        skipLibCheck: true,
      },
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ikm-ui-library',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['react', 'react-dom', /^react\/.*/, 'lucide-react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: 'index.[ext]',
      },
    },
  },
})
