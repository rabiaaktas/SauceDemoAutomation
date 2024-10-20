import { test, expect } from '@playwright/test';

test.describe('Test "Products" page for standard_user', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.saucedemo.com/");
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.click('[id="login-button"]');
        await expect(page.locator('[data-test="title"]')).toHaveText("Products");
    });
    
    test.afterEach(async ({ page }) => {
        await page.close()
    });
    
    test('Check products are loaded', async ({ page }) => {
        await page.locator('[class="inventory_item"]')
    });
    
    test('Check product page open successfully', async ({ page }) => {
        const product_name = await page.locator('[data-test="inventory-item-name"]').first().textContent()
        const price = await page.locator('[data-test="inventory-item-price"]').first().textContent()
        const desc = await page.locator('[data-test="inventory-item-desc"]').first().textContent()
        
        await page.click('a[id="item_4_title_link"]')
        await expect(page.locator('[data-test="inventory-item-name"]').first()).toHaveText(product_name ?? "")
        await expect(page.locator('[data-test="inventory-item-price"]').first()).toHaveText(price ?? "")
        await expect(page.locator('[data-test="inventory-item-desc"]').first()).toHaveText(desc ?? "")
    });

    test('Check sort Name A-Z', async ({ page }) => {
        await page.locator('[data-test="product-sort-container"]').selectOption('Name (A to Z)')
        
        const product_name_1 = await page.locator('[data-test="inventory-item-name"]').first().textContent()
        const product_name_2 = await page.locator('[data-test="inventory-item-name"]').nth(1).textContent()

        if((product_name_1 ?? "") <= (product_name_2 ?? "")){
            console.log('Success, sorting made correctly')
        }
        else{
            throw new Error('Sorting cant be made')
        }      
    });

    test('Check sort Name Z-A', async ({ page }) => {
        await page.locator('[data-test="product-sort-container"]').selectOption('Name (Z to A)')
        
        const product_name_1 = await page.locator('[data-test="inventory-item-name"]').first().textContent()
        const product_name_2 = await page.locator('[data-test="inventory-item-name"]').nth(1).textContent()

        if((product_name_1 ?? "") >= (product_name_2 ?? "")){
            console.log('Success, sorting made correctly')
        }
        else{
            throw Error('Sorting cant be made');
        }
    });

    test("Check sort Price (low to high)", async ({ page }) => {
        await page.locator('[data-test="product-sort-container"]').selectOption('Price (low to high)')
        
        const price_1_text = await page.locator('[data-test="inventory-item-price"]').first().textContent()
        const price_1 = parseFloat(price_1_text.replace('$',''))
        const price_2_text = await page.locator('[data-test="inventory-item-price"]').nth(1).textContent()
        const price_2 = parseFloat(price_2_text.replace('$',''))
        
        if((price_1 ?? "") <= (price_2 ?? "")){
            console.log('Success, sorting made correctly')
        }
        else{
            throw new Error('Sorting cant be made');
        }
    });
    
    test("Check sort Price (high to low)", async ({ page }) => {
        await page.locator('[data-test="product-sort-container"]').selectOption('Price (high to low)')
        
        const price_1_text = await page.locator('[data-test="inventory-item-price"]').first().textContent()
        const price_1 = parseFloat(price_1_text.replace('$',''))
        const price_2_text = await page.locator('[data-test="inventory-item-price"]').nth(1).textContent()
        const price_2 = parseFloat(price_2_text.replace('$',''))
        
        if((price_1 ?? "") >= (price_2 ?? "")){
            console.log('Success, sorting made correctly')
        }
        else{
            throw new Error('Sorting cant be made');
        }
    });

})