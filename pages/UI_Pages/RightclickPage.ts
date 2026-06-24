import { Page, Locator } from '@playwright/test';
import { BaseMethods } from '../../baseMethods/BaseMethods.spec';
import { TestConfig } from '../../test.config';
import { Logger
    
 } from '../../utils/Logger';


export class RightclickPage extends BaseMethods{
    readonly page: Page;
    readonly  hotspot:Locator;
readonly contextmenu:Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.hotspot=page.locator("#hot-spot");
this.contextmenu=page.locator("//a[text()='Context Menu']");
        

    }

    /**
     * Navigate to RightClick page
     */
    async navigate()
    {
           
            await this.click(this.contextmenu);
            Logger.info("Navigating to Context Menu Page .....");
        
    }
    /**
     * 
     * Click on Hotspot
     */
    /**
 * Click on Hotspot and return alert message
 */
async HandleAlertbyContextClick(): Promise<string> {

    const alertPromise = new Promise<string>((resolve) => {

        this.page.once('dialog', async (dialog) => {

            const message = dialog.message();

            console.log(`Alert Message: ${message}`);

            await dialog.accept();

            resolve(message);
        });
    });

    await this.hotspot.click({ button: 'right' });

    return await alertPromise;
}


}