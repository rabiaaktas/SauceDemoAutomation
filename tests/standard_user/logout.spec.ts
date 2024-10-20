import { test, expect } from '@playwright/test';

test.describe('Logout',  () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.saucedemo.com/")
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.click('[id="login-button"]');
        await expect(page.locator('[data-test="title"]')).toHaveText("Products");
    });
    
    test.afterEach(async ({ page }) => {
        await page.close()
    });
    
    test('Check user can be logged out', async ({ page }) => {
        await page.click('[id="react-burger-menu-btn"]')
        await page.click('[id="logout_sidebar_link"]')

        await expect(page.locator('[id="login-button"]')).toBeVisible()
    });
    
})