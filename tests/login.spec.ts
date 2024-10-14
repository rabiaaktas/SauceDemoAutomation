import { test, expect } from '@playwright/test';

test.describe("Login Tests - Check all users behave as expected while login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
  })
  test('Valid login - standard_user', async ({ page }) => {
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.click('[id="login-button"]')
    await expect(page.locator("[data-test='title']")).toHaveText("Products")
  });
  test('Invalid login - standard_user', async ({ page }) => {
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('123')
    await page.click('[id="login-button"]')
    await expect(page.locator("[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service")
  });
  test("Check error message for locked user - locked_out_user", async ({ page }) => {
    await page.locator('#user-name').fill('locked_out_user')
    await page.locator('#password').fill('secret_sauce')
    await page.click('[id="login-button"]')
    await expect(page.locator("[data-test='error']")).toHaveText("Epic sadface: Sorry, this user has been locked out.")
  });
  test('Valid login - problem_user', async ({ page }) => {
    await page.locator('#user-name').fill('problem_user')
    await page.locator('#password').fill('secret_sauce')
    await page.click('[id="login-button"]')
    await expect(page.locator("[data-test='title']")).toHaveText("Products")
  });
  test('Invalid login - problem_user', async ({ page }) => {
    await page.locator('#user-name').fill('problem_user')
    await page.locator('#password').fill('123')
    await page.click('[id="login-button"]')
    await expect(page.locator("[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service")
  });
  test('Valid login - performance_glitch_user', async ({ page }) => {
    await page.locator('#user-name').fill('performance_glitch_user')
    await page.locator('#password').fill('secret_sauce')
    await page.click('[id="login-button"]')
    await expect(page.locator("[data-test='title']")).toHaveText("Products")
  });
  test('Invalid login - performance_glitch_user', async ({ page }) => {
    await page.locator('#user-name').fill('performance_glitch_user')
    await page.locator('#password').fill('123')
    await page.click('[id="login-button"]')
    await expect(page.locator("[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service")
  });
  test('Valid login - error_user', async ({ page }) => {
    await page.locator('#user-name').fill('error_user')
    await page.locator('#password').fill('secret_sauce')
    await page.click('[id="login-button"]')
    await expect(page.locator("[data-test='title']")).toHaveText("Products")
  });
  test('Invalid login - error_user', async ({ page }) => {
    await page.locator('#user-name').fill('error_user')
    await page.locator('#password').fill('123')
    await page.click('[id="login-button"]')
    await expect(page.locator("[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service")
  });
  test('Valid login - visual_user', async ({ page }) => {
    await page.locator('#user-name').fill('visual_user')
    await page.locator('#password').fill('secret_sauce')
    await page.click('[id="login-button"]')
    await expect(page.locator("[data-test='title']")).toHaveText("Products")
  });
  test('Invalid login - visual_user', async ({ page }) => {
    await page.locator('#user-name').fill('visual_user')
    await page.locator('#password').fill('123')
    await page.click('[id="login-button"]')
    await expect(page.locator("[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service")
  });
})

