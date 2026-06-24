import { test, expect } from '@playwright/test';
import { DropdownPage } from '../../pages/UI_Pages/DropdownPage';
import { TestConfig } from '../../test.config';
let dropdown:DropdownPage;

test.beforeEach(async ({ page }) => {

    const config=new TestConfig(); 
    await page.goto(config.appurl);

    dropdown = new DropdownPage(page);
    

});

test.afterEach(async ({ page }) => {

    await page.close();

});
test('Verify Option 2 is selected', async ({ page }) => {

    await dropdown.navigate();

    await dropdown.selectOption2();

    const selectedOption = await dropdown.getSelectedOption();

    expect(selectedOption).toBe('Option 2');
});