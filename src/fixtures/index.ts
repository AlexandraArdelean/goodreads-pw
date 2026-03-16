import { test as base } from '@playwright/test';
import { PageManager } from '../helpers/PageManager';

type AppFixtures = {
  pageManager: PageManager;
  gotoHomepage: () => Promise<void>;
};

export const test = base.extend<AppFixtures>({
  pageManager: async ({ page }, use) => {
    await use(new PageManager(page));
  },

  gotoHomepage: async ({ page }, use) => {
    await use(async () => {
      await page.goto('/');
    });
  },
});

export { expect } from '@playwright/test';