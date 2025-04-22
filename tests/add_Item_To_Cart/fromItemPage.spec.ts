import { test, expect } from '../../fixtures/authFixture';
import { ItemsPage } from '../../pages/ItemsPage';

test('logged-in user can access dashboard', async ({ loggedInPage }) => {
    const itemsPage = new ItemsPage(loggedInPage);
    // Step 1: Navigate to the jackets page
    await test.step('Navigate to jackets page', async () => {
        await itemsPage.goToJackets();
    });
    // Step 2: Click on the first item
    await test.step('Click on the first item', async () => {
    });

    // Step 3: Select the Size
    await test.step('Select the Size', async () => {

    });
    // Step 4: Select the Color
    await test.step('Select the Color', async () => {

    });

    // Step 5: Click on the Add to Cart button
    await test.step('Click on Add to Cart button', async () => {
    });


    await loggedInPage.waitForTimeout(5000); // Wait for 2 seconds
});