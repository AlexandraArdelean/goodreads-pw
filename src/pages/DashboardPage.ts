import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  readonly userNav: Locator;

  constructor(page: Page) {
    super(page);
    this.userNav = page.locator('.siteHeader__personal');
  }

  async isLoaded() {
    await this.waitForPageLoad();
    await expect(this.userNav).toBeVisible();
  }
}