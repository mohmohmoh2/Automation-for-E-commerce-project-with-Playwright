    import { Page } from '@playwright/test';

    export class LoginPage {
    constructor(private page: Page) {}

    async gotologin() {
        await this.page.goto('https://magento.softwaretestingboard.com/customer/account/login'); // Actual login route
    }

    async login(username: string, password: string) {
        await this.page.fill('#email', username);
        await this.page.fill('#pass', password);
        await this.page.click('#send2');
    }
    }
