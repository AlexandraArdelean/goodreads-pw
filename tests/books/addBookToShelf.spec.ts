import { test, expect } from '../../src/fixtures';
import { testData } from '../../src/test-data/testData';

test.describe('Search for a book and add it to ~Want to Read~ shelf' , () => {

  test('Search book and click on want to read button', async ({ gotoHomepage, pageManager }) => {
    
    await gotoHomepage();
    await pageManager.homePage.searchBook(testData.book.searchQuery);
    await pageManager.searchResultsPage.isLoaded();
    await pageManager.searchResultsPage.clickResultByTitle(testData.book.title);
    await pageManager.bookPage.isLoaded();
    await expect(pageManager.bookPage.bookTitle).toContainText(testData.book.title);
    await pageManager.bookPage.addToWantToRead();
    await pageManager.bookPage.goToMyBooks();
    await pageManager.myBooksPage.isLoaded();
    await pageManager.myBooksPage.openWantToReadShelf();
    await pageManager.myBooksPage.hasBookWithTitle(testData.book.title);
  });
});