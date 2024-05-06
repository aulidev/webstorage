/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    coverage: {
      all: true,
      provider: 'istanbul',
      reporter: ['text', 'json', 'json-summary', 'html'],
    },
    
  },
});
