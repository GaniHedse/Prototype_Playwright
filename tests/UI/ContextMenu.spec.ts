import {test,expect} from '@playwright/test'
import { RightclickPage } from '../../pages/UI_Pages/RightclickPage';
import { TestConfig } from '../../test.config';

let rightclick:RightclickPage;

test.beforeEach(async ({ page }) => {

    const config=new TestConfig(); 
    await page.goto(config.appurl);

    rightclick = new RightclickPage(page);
    

});

test.afterEach(async ({ page }) => {

    await page.close();

});

test('Verify Context Menu Alert', async ({ page }) => {

  
await rightclick.navigate();
    const alertMessage =
        await rightclick.HandleAlertbyContextClick();

    expect(alertMessage).toContain('You selected a context menu');
});