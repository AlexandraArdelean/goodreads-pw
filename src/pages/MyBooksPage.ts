import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from "./BasePage";

export class MyBooksPage extends BasePage{
    readonly wantToReadShelf: Locator;
    readonly booksList: Locator;

    constructor(page: Page){
        super(page);
        this.wantToReadShelf = page.locator('a[title*="Want to Read shelf"]');
        this.booksList = page.locator('#books');
    }

    async isLoaded(){
        await this.waitForPageLoad();
    }

    async openWantToReadShelf() {
        await this.wantToReadShelf.click();
    }

    async hasBookWithTitle(title: string){
        const bookRow = this.page.locator('td.field.title', { hasText: title });
        await expect(bookRow).toBeVisible();
    }

}