import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly signInButton: Locator;
  readonly searchBar: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    super(page);
    this.signInButton = page.getByRole('link', { name: 'Sign in' });
    this.searchBar = page.getByRole('banner').getByRole('textbox', { name: 'Search books' });
    this.searchButton = page.getByRole('banner').getByRole('button', { name: 'Search' });
  }
  
  async isLoaded() {
    await this.waitForPageLoad();
    await expect(this.signInButton).toBeVisible();
  }

  async clickSignIn() {
    await this.signInButton.click();
  }

  async searchBook(title: string) {
    await this.searchBar.click();
    await this.searchBar.fill(title);
    await this.searchButton.click();
  }
}