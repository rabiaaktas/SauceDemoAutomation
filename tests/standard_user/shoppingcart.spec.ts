import { test, expect } from '@playwright/test';

test.describe('Test shopping cart', () => {

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

    test('Add product to shopping cart', async ({ page }) => {
        const product_name = await page.locator('[data-test="inventory-item-name"]').first().textContent()
        const add = 'add-to-cart-' + product_name?.replaceAll(' ','-').toLowerCase()

        await page.click('[id=' + add + ']')
        await page.click('[data-test="shopping-cart-link"]')
        await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText(product_name ?? '');

    });

    test('Delete product in shopping cart', async ({ page }) => {
        const product_name = await page.locator('[data-test="inventory-item-name"]').first().textContent()
        const add = 'add-to-cart-' + product_name?.replaceAll(' ','-').toLowerCase()
        const remove = 'remove-' + product_name?.replaceAll(' ','-').toLowerCase()

        await page.click('[id=' + add + ']')
        await page.click('[data-test="shopping-cart-link"]')
        await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText(product_name ?? '');
        await page.click('[id=' + remove + ']')

        const element = await page.locator('[data-test="inventory-item-name"]')
        
        if(await element.count() == 0){
            console.log('Product is deleted successfully.')
        }
        else{
            throw new Error('Product is deleted.')
        }

    });

    


})