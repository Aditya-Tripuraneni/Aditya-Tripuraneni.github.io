import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    include: ['lib/**/*.test.ts', 'api/**/*.test.ts', 'src/**/*.test.ts'],
  },
})
