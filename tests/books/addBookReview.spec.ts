import { test, expect } from '../../src/fixtures';
import { testData } from '../../src/test-data/testData';

test.describe(' Search book and add review', () => {

  test('Search for book and post a review', async ({ gotoHomepage, pageManager }) => {
    
    await gotoHomepage();
    await pageManager.homePage.searchBook(testData.book.searchQuery);
    await pageManager.searchResultsPage.isLoaded();
    await pageManager.searchResultsPage.clickResultByTitle(testData.book.title);
    await pageManager.bookPage.isLoaded();
    await expect(pageManager.bookPage.bookTitle).toContainText(testData.book.title);
    await pageManager.bookPage.writeReview(testData.review.text);
    await pageManager.bookPage.verifyMyReview(testData.user.name, testData.review.text);
  });
});