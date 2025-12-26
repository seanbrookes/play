import { defineConfig } from '@playwright/test';

export default defineConfig({
  // 1. Restrict Playwright to only look in the /tests folder
  testDir: './tests',

  // 2. Only include files that have 'spec' in the filename
  // This matches files like 'example.spec.js' or 'auth-spec.ts'
  testMatch: /.*spec\.(js|ts|mjs)/,

  use: {
    baseURL: 'http://localhost:6006', // Useful for your Storybook tests
    screenshot: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});