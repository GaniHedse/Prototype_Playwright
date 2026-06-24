import { Page, Locator } from '@playwright/test';

export class BaseMethods {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async click(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }

    async enterText(locator: Locator, value: string) {
        await locator.fill(value);
    }

    async clear(locator: Locator) {
        
        await locator.clear();
    }

    async getText(locator: Locator) {
        return await locator.textContent() ?? "";
    }

    async isVisible(locator: Locator) {
        return await locator.isVisible();
    }

    async acceptAlert() {
        this.page.once('dialog', async dialog => {
            console.log(`Alert Message : ${dialog.message()}`);
            await dialog.accept();
        });
    }

    async dismissAlert() {
        this.page.once('dialog', async dialog => {
            console.log(`Alert Message : ${dialog.message()}`);
            await dialog.dismiss();
        });
    }

    async   acceptPromptAlert(text: string) {
        this.page.once('dialog', async dialog => {
            console.log(`Alert Message : ${dialog.message()}`);
            await dialog.accept(text);
        });
    }
}