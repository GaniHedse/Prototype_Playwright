import { Page, Locator } from '@playwright/test';
import { Logger } from '../../utils/Logger';


export class CheckboxPage {

    readonly page: Page;
    readonly checkbox1: Locator;
    readonly checkbox2: Locator;
    readonly chckbox:Locator;

    constructor(page: Page) {
        this.page = page;

        this.chckbox=page.locator("//a[text()='Checkboxes']");
        this.checkbox1 = page.locator('#checkboxes input').nth(0);
        this.checkbox2 = page.locator('#checkboxes input').nth(1);
    }

    async navigate() {
       await this.chckbox.click();
       Logger.info("Navigating to Basic Auth Page ....")
    }

    async checkFirstCheckbox() {
        await this.checkbox1.check();
        Logger.info("Clikcing on First Checkbox.....")
    }

    async uncheckSecondCheckbox() {
        await this.checkbox2.uncheck();
        Logger.info("Unchecking the Second Checkboxes")
    }

    async isFirstCheckboxChecked(): Promise<boolean> {
        return await this.checkbox1.isChecked();
        Logger.info(`Is First check boxe is checked ???? ...`)
    }

    async isSecondCheckboxChecked(): Promise<boolean> {
        return await this.checkbox2.isChecked();
        Logger.info("Validating Second Check box is Checked or not    ?????");
    }
}