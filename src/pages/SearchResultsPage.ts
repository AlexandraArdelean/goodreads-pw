import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchResultsPage extends BasePage {
  readonly resultsContainer: Locator;

  constructor(page: Page) {
    super(page);
    this.resultsContainer = page.locator('.tableList');
  }

  async isLoaded() {
    await this.waitForPageLoad();
    await expect(this.resultsContainer).toBeVisible();
  }

  async clickResultByTitle(title: string) {
    await this.page.getByRole('link', { name: title }).first().click();
  }
}