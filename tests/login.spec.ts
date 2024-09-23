import { test, expect } from '@playwright/test';

test.describe("Login Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
  })
  test('Valid login', async ({ page }) => {
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.click('[id="login-button"]')
  });
  
})

