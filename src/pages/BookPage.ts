import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class BookPage extends BasePage {
  readonly bookTitle: Locator;
  readonly wantToReadButton: Locator;
  readonly myBooksNav: Locator

  readonly writeReviewButton: Locator;
  readonly myReviewCard: Locator;
  readonly myReviewText: Locator;
  readonly myReviewName: Locator;

  constructor(page: Page) {
    super(page);
    this.bookTitle = page.locator('[data-testid="bookTitle"]');
    this.wantToReadButton = page.getByRole('button', { name: 'Want to Read' });
    this.myBooksNav = page.locator('//a[contains(@href, "mybooks")]');

    this.writeReviewButton =  page.getByRole('button', { name: 'Write a Review' });
    this.myReviewCard = page.locator('.MyReviewCard');
    this.myReviewText = page.locator('.MyReviewCard [data-testid="contentContainer"]');
    this.myReviewName = page.locator('.MyReviewCard [data-testid="name"]');
  }

  async isLoaded() {
    await this.waitForPageLoad();
    await expect(this.bookTitle).toBeVisible();
  }


  async addToWantToRead() {
    await this.wantToReadButton.first().click();
    await expect(this.wantToReadButton).toBeVisible();
  }

  async goToMyBooks() {
    await this.myBooksNav.click();
  }

  async writeReview(reviewText: string) {
    const bookUrl = this.page.url();
    const textArea = this.page.locator('#review_review_usertext');

    await this.writeReviewButton.scrollIntoViewIfNeeded();
    await this.writeReviewButton.click();
    

    await this.page.waitForLoadState('domcontentloaded');
    await textArea.fill(reviewText);

    await this.page.getByRole('button', {name: 'Post'}).click();
    await this.page.waitForLoadState('domcontentloaded');

    
    await this.page.goto(bookUrl);
    await this.isLoaded();
  }

  async verifyMyReview(userName: string, reviewText: string) {
    await expect(this.myReviewCard).toBeVisible();
    await expect(this.myReviewName).toContainText(userName);
    await expect(this.myReviewText).toContainText(reviewText);
  }
}