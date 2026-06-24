import{test,expect} from '@playwright/test';
import { BasicAuthPage } from '../../pages/UI_Pages/BasicAuthPage';


let basicAuth : BasicAuthPage;

test.beforeEach(async ({ page }) => {

    

    basicAuth = new BasicAuthPage(page);
    
    

});

test.afterEach(async ({ page }) => {

    await page.close();

});
test('Handling Basic Auth',async ()=>
{
    await basicAuth.navigateToBasicAuth();
    const message=await basicAuth.getSuccessMessage();
    expect(message).toContain('Congratulations');
});