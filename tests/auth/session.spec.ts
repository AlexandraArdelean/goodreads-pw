import { test, expect } from '../../src/fixtures';


test.describe ('Authentication session verification', () => {
    test('Verify if user has access to Dashboard', async({ page, pageManager }) => {
        await page.goto('/');
        await pageManager.dashboardPage.isLoaded(); 
        await expect(pageManager.dashboardPage.userNav).toBeVisible();
    })
})