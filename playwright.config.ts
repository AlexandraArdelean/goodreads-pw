import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  retries: 1,
  reporter: 'html',

  use: {
    baseURL:    'https://www.goodreads.com/',
    headless:   false,
    screenshot: 'only-on-failure',
    trace:      'on-first-retry',
  },

  projects: [
    {
      name:      'setup',
      testMatch: /auth\.setup\.ts/,
    },
    {
      name: 'chromium',
      testIgnore: /tests\/loginTests\.spec\.ts/, //ignora fisierul loginTests
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/user.json',
      },
      dependencies: ['setup'],
    },
    {
      name: 'chromium-no-auth',
      testMatch: /.*loginTests.*\.spec\.ts/, //ruleaza loginTests doar
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});