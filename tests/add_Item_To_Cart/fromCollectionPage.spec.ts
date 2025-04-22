import { test, expect } from '../../fixtures/authFixture';
import { ItemsPage } from '../../pages/ItemsPage';

test('logged-in user can add item to the Cart from the collection page', async ({ loggedInPage }) => {
    const itemsPage = new ItemsPage(loggedInPage);
    // Step 1: Navigate to the jackets page
    await test.step('Navigate to jackets page', async () => {
        await itemsPage.goToJackets();
    });
    // Step 2: Select the first item
    await test.step('Select the Size', async () => {
        // Note: The size is selected in the next step, so this step is just a placeholder.
        await itemsPage.selectItemSize();
    });
    // Step 3: Select size and color
    await test.step('Select the Color', async () => {
        // Note: The color is selected in the next step, so this step is just a placeholder.
        await itemsPage.selectItemColor('black');
    });

    // Step 4: Click on the Add to Cart button
    await test.step('Click on Add to Cart button', async () => {
        await itemsPage.addToCart();
    });

    // Step 5: Verify the item is added to the cart
    await test.step('Verify the item is added to the cart', async () => {
        const cartCount = await loggedInPage.locator('div> a > span.counter.qty');
        expect(cartCount).toBeVisible();
    });

    await loggedInPage.waitForTimeout(5000); // Wait for 2 seconds
});