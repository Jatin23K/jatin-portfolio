import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    include: ['src/test/**/*.test.{ts,tsx}', 'src/test/**/*.spec.{ts,tsx}'],
    exclude: ['tmp-verification/**', 'test-results/**', 'dist/**', 'node_modules/**'],
    css: true,
    coverage: {
      reporter: ['text', 'html'],
    },
  },
})

