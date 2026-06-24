import { Page, Locator } from '@playwright/test';
import { BaseMethods } from '../../baseMethods/BaseMethods.spec';
import { Logger } from '../../utils/Logger';
export class DropdownPage extends BaseMethods {

    readonly page: Page;
    readonly dropdown: Locator;
    readonly dpdown:Locator;

    constructor(page: Page) {
        super(page);

        this.page = page;
        this.dropdown = page.locator('#dropdown');
        this.dpdown=page.locator("//a[text()='Dropdown']");
    }
/**
 * Navigate
 */
async navigate()
{
    await this.dpdown.click();
    Logger.info("Navigating to Dropdown page .....")
    
}
    /**
     * Select Option 2
     */
    async selectOption2(): Promise<void> {
        await this.dropdown.selectOption('2');
        Logger.info("Selecting Second Dropdown Option   ");
    }

    /**
     * Get selected option text
     */
    async getSelectedOption(): Promise<string> {
        return await this.dropdown.locator('option:checked').textContent() ?? '';
        Logger.info("Returning Selected option Text to validate .....");
    }
}