import {
    Browser,
    BrowserContext,
    chromium,
    firefox,
    webkit,
    Page
} from '@playwright/test';
import { TestConfig } from '../test.config';

const config = new TestConfig();

export class BaseTest {

    protected browser!: Browser;
    protected context!: BrowserContext;
    protected page!: Page;

    
    
    async  launchApplication( ) {

        const browser=config.browserName;
  
        switch (browser.toLowerCase()) {

            case 'firefox':
                this.browser = await firefox.launch({
                   // headless: config.browserOptions.headless,
                    slowMo: config.browserOptions.slowMo
                });
                break;

            case 'webkit':
                this.browser = await webkit.launch({
                    headless: config.browserOptions.headless,
                    slowMo: config.browserOptions.slowMo
                });
                break;

            default:
                this.browser = await chromium.launch({
                    headless: config.browserOptions.headless,
                    slowMo: config.browserOptions.slowMo
                   
                });
        }

      
        this.context = await this.browser.newContext({

         
            ignoreHTTPSErrors: true,

            viewport: {
                width: 1920,
                height: 1080
            }
        });

        
        await this.context.clearCookies();

        
        this.page = await this.context.newPage();

       
        await this.page.goto(config.appurl, {

            waitUntil: 'networkidle'
        });


        await this.page.evaluate(() => {

            localStorage.clear();

            sessionStorage.clear();

        });

      
        console.log("==========================Running from BaseTEST==========================");

        return this.page;
    }

    async tearDown() {

       
        
        await this.context.close();

        await this.browser.close();
    }
}