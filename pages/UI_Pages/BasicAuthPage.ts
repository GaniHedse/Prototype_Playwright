import { Page, Locator } from '@playwright/test';
import { BaseMethods } from '../../baseMethods/BaseMethods.spec';
import { Logger } from '../../utils/Logger';


export class BasicAuthPage extends BaseMethods {

    readonly page: Page;
    readonly basicAuthSuccess: Locator;

    constructor(page: Page) {

        super(page);

        this.page = page;

        this.basicAuthSuccess = page.locator(
            "//p[contains(text(),'Congratulations!')]"
        );
    }

    async navigateToBasicAuth(): Promise<void> {

        await this.page.goto(
            'https://admin:admin@the-internet.herokuapp.com/basic_auth'
            
            
        );
        Logger.info("Opening into Basic Auth Page");
    }

    async getSuccessMessage(): Promise<string> {

        return (await this.basicAuthSuccess.textContent()) ?? '';
    }
}