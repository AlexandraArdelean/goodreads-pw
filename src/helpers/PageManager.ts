import { Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { BookPage } from '../pages/BookPage';
import { MyBooksPage } from '../pages/MyBooksPage';

export class PageManager {
  readonly page: Page;
  readonly homePage: HomePage;
  readonly loginPage: LoginPage;
  readonly dashboardPage: DashboardPage;
  readonly searchResultsPage: SearchResultsPage;
  readonly bookPage: BookPage;
  readonly myBooksPage: MyBooksPage;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(page);
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.searchResultsPage = new SearchResultsPage(page);
    this.bookPage = new BookPage(page);
    this.myBooksPage = new MyBooksPage(page);
  }
}