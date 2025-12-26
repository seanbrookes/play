import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  test: {
    include: ['**/*.test.jsx'],
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
    },
  },
  // Use esbuild to handle JSX in a vanilla environment
  esbuild: {
    jsxFactory: 'h', // Matches typical vanilla/preact runtimes
    jsxFragment: 'Fragment',
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
  },
});
