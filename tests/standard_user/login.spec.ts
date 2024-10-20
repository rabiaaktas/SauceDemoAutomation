import { test, expect } from '@playwright/test';

test.describe('Login Tests - Check standard_user behave as expected while login', () => {
    
    test.beforeEach(async ({ page }) => {
      await page.goto("https://www.saucedemo.com/")
    });

    test.afterEach(async ({ page }) => {
      await page.close()
    });

    test('Valid login - standard_user', async ({ page }) => {
      await page.locator('#user-name').fill('standard_user');
      await page.locator('#password').fill('secret_sauce');
      await page.click('[id="login-button"]');
      await expect(page.locator("[data-test='title']")).toHaveText("Products");
    });

    test('Invalid login - standard_user', async ({ page }) => {
      await page.locator('#user-name').fill('standard_user');
      await page.locator('#password').fill('123');
      await page.click('[id="login-button"]');
      await expect(page.locator("[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service");
    });

  })