import { test, expect } from '../../src/fixtures';
import { testData } from '../../src/test-data/testData';

test.describe('Successfull login, without storage session', () => {
  test('Sign in with valid credentials', async ({ pageManager, gotoHomepage }) => {
    await gotoHomepage();
    await pageManager.homePage.clickSignIn();
    await pageManager.loginPage.clickOnSignInWithEmail();
    await pageManager.loginPage.isLoaded();
    await pageManager.loginPage.login(testData.user.email, testData.user.password);
    await pageManager.dashboardPage.isLoaded();
    await expect(pageManager.dashboardPage.userNav).toBeVisible();
});
})




test.describe('Login with invalid credentials', () => {
  test('Sign in with invalid email and valid password and verify error message', async ({ gotoHomepage, pageManager }) => {

    await gotoHomepage();
    await pageManager.homePage.clickSignIn();
    await pageManager.loginPage.clickOnSignInWithEmail();
    await pageManager.loginPage.isLoaded();
    await pageManager.loginPage.login(testData.user.invalidEmail, testData.user.password);

    await expect(pageManager.loginPage.errorMessage).toBeVisible();
  }); 


   test('Sign in with valid email and invalid password and verify error message', async ({ gotoHomepage, pageManager }) => {

    await gotoHomepage();
    await pageManager.homePage.clickSignIn();
    await pageManager.loginPage.clickOnSignInWithEmail();
    await pageManager.loginPage.isLoaded();
    await pageManager.loginPage.login(testData.user.email, testData.user.invalidPassword);

    await expect(pageManager.loginPage.errorMessage).toBeVisible();
  });

  
});

