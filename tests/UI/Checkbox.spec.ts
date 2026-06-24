import { test, expect } from '@playwright/test';
import { CheckboxPage } from '../../pages/UI_Pages/Checkboxpage';
import { TestConfig } from '../../test.config';

let checkboxPage:CheckboxPage;

test.beforeEach(async ({ page }) => {

    const config=new TestConfig(); 
    await page.goto(config.appurl);

    checkboxPage = new CheckboxPage(page);
     await checkboxPage.navigate();

});

test.afterEach(async ({ page }) => {

    await page.close();

});
test('Verify checkbox selection and deselection', async ({ page }) => {


    
    

   

   
    await expect(checkboxPage.checkbox2).toBeChecked();

    
    await checkboxPage.checkFirstCheckbox();

    
    await expect(checkboxPage.checkbox1).toBeChecked();

  
    await checkboxPage.uncheckSecondCheckbox();

    
    await expect(checkboxPage.checkbox2).not.toBeChecked();
});