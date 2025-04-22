    import { Page } from '@playwright/test';

    export class ItemsPage {
    constructor(private page: Page) {}

        async goToJackets() {
            await this.page.locator('#ui-id-5').hover();
            await this.page.locator('#ui-id-17').hover();
            await this.page.locator('#ui-id-19').click();
        }

        async selectItemSize() {
            await this.page.locator(`li:first-child   #option-label-size-143-item-167`).click();
        }

        async selectItemColor(color: string) {
            const colorId = color.toLowerCase() === 'black' ? '49' : color.toLowerCase() === 'blue' ? '50' : color.toLowerCase() === 'orange' ? '56' : color.toLowerCase() === 'red' ? '58' : '0';
            if (colorId !== '0') {
            await this.page.locator(`li:first-child #option-label-color-93-item-${colorId}`).click();
            }else {
                throw new Error(`Color ${color} is not available`);
            }
        }

        async addToCart() {
            await this.page.locator('li:nth-child(1) button').click();
        }

        




    }

