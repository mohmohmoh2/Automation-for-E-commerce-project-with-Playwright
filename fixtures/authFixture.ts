import { test as base, type Page, type TestInfo } from '@playwright/test';
import { validUser } from '../utils/test-data'; // Adjust the import path as necessary

// ✅ Define the custom fixture type
type MyFixtures = {
    loggedInPage: Page;
};

// ✅ Create the custom test object
export const test = base.extend<MyFixtures>({
    loggedInPage: async ({ browser }, use, testInfo: TestInfo) => {
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('https://magento.softwaretestingboard.com/customer/account/login');
        await page.fill('#email', validUser.username);
        await page.fill('#pass', validUser.password);
        await page.click('#send2');

        await use(page); // This makes "loggedInPage" available in your test
        await context.close();
    },
});

export { expect } from '@playwright/test';
