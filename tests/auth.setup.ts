import { test as setup, expect} from '@playwright/test';
import * as fs from 'fs';
import { PageManager } from '../src/helpers/PageManager';
import { testData } from '../src/test-data/testData';

const AUTH_FILE = '.auth/user.json';

setup('Login and save session', async ({ page }) => {
  if (fs.existsSync(AUTH_FILE)) {
    console.log('User is already signed in! Continue without logging in ...');
    return;
  }

  const pm = new PageManager(page);

  await page.goto('/');
  await pm.homePage.clickSignIn();
  await pm.loginPage.clickOnSignInWithEmail();
  await pm.loginPage.isLoaded();
  await pm.loginPage.login(testData.user.email, testData.user.password);
  await pm.dashboardPage.isLoaded();
  

  fs.mkdirSync('.auth', { recursive: true });
  await page.context().storageState({ path: AUTH_FILE });

  console.log('Login is successfull and session is saved in ./auth/user.json');
});