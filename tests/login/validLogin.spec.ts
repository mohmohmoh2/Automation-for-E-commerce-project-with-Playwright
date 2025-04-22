import { test, expect } from '../../fixtures/authFixture';
import { LoginPage } from '../../pages/LoginPage';
import { validUser } from '../../utils/test-data';

test('User can login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotologin();
    await loginPage.login(validUser.username, validUser.password);
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/customer/account/');
    //await page.pause(); // This pauses the test and opens the Playwright Inspector

});
