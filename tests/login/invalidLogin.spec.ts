
// This test suite tests the login functionality of a Magento website using Playwright.
// It includes tests for invalid login attempts with wrong password and empty fields.

import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { invalidPasswordUser } from "../../utils/test-data";

test.describe("Invalid Login", () => {
    
    test("Should show error for empty fields", async ({ page }) => {
        const loginPage = new LoginPage(page);
        // Step1: Go to login page
        await test.step("Go to login page", async () => {
            await loginPage.gotologin();
        });
        // Step2: Attempt to login with empty fields
        await test.step("Attempt to login with empty fields", async () => {
            await loginPage.login("", "");
        });
        // Step3: Verify error message
        await test.step("Verify error messages for empty fields", async () => {
            const emailErrorMessage = page.locator("#email-error");
            const passwordErrorMessage = page.locator("#pass-error");
            await Promise.all([
                expect(emailErrorMessage).toBeVisible(),
                expect(passwordErrorMessage).toBeVisible()
            ]);
        });
    });

    test("Should show error for wrong password", async ({ page }) => {
        const loginPage = new LoginPage(page);
        // Step1: Go to login page
        await test.step("Go to login page", async () => {
            await loginPage.gotologin();
        });
        // Step2: Login with invalid credentials
        await test.step("Login with invalid credentials", async () => {
            await loginPage.login(
                invalidPasswordUser.username,
                invalidPasswordUser.password
            );
        });
        // Step3: Verify error message
        await test.step("Verify error message", async () => {
            const errorMessage = page.locator('[data-ui-id="message-error"]');
            await expect(errorMessage).toBeVisible();
        });
    });

});
