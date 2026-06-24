import { Page, Locator } from '@playwright/test';
import { BaseMethods } from '../../baseMethods/BaseMethods.spec';
import { Logger } from '../../utils/Logger';
export class AlertPage extends BaseMethods {

    private readonly simpleAlertBtn: Locator;
    private readonly confirmAlertBtn: Locator;
    private readonly promptAlertBtn: Locator;
    private readonly resultText: Locator;
    private readonly alertlink:Locator;

    constructor(page: Page) {

        super(page);

        this.simpleAlertBtn = page.locator("//button[text()='Click for JS Alert']");
        this.confirmAlertBtn = page.locator("//button[text()='Click for JS Confirm']");
        this.promptAlertBtn = page.locator("//button[text()='Click for JS Prompt']");
        this.resultText = page.locator("#result");
        this.alertlink=page.locator("//a[text()='JavaScript Alerts']");
    }

    async navigate()
    {
        await this.click(this.alertlink);
        Logger.info("Navigating to Alert Page ....");
    }
    async handleSimpleAlert() {

        await this.acceptAlert();
        await this.click(this.simpleAlertBtn);
        Logger.info("Clicking on Simple Alert .....");

    }

    async handleConfirmAlertAccept() {

        await this.acceptAlert();
        await this.click(this.confirmAlertBtn);
        Logger.info("Clicking on Confirmational Alert ....");

    }

    async handleConfirmAlertDismiss() {

        await this.dismissAlert();
        await this.click(this.confirmAlertBtn);
        Logger.info("Clicking on Confirmational Alert ....");

    }

    async handlePromptAlert(text: string) {

        await this.acceptPromptAlert(text);
        await this.click(this.promptAlertBtn);
        Logger.info("Clicking on Prompt Alert ....");

    }

    async getResultMessage(): Promise<string> {

        return await this.getText(this.resultText);
        Logger.info("Getting Result message after Handling Alert....");

    }
}