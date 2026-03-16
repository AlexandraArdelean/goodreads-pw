import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly signInWithEmail: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.signInWithEmail = page.getByRole('link', {name: 'Sign in with email'})
    this.emailInput = page.locator('#ap_email');
    this.passwordInput = page.locator('#ap_password');
    this.signInButton = page.locator('#signInSubmit');
    this.errorMessage = page.locator('#auth-error-message-box');
  }

  

  async isLoaded() {
    await this.waitForPageLoad();
    
  }

  async clickOnSignInWithEmail() {
    await this.signInWithEmail.click();
  }

  async login(email: string, password: string) {
    
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}