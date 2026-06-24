import { test, expect, Page } from '@playwright/test';
import { AlertPage } from '../../pages/UI_Pages/AlertPage';
import { BaseMethods } from '../../baseMethods/BaseMethods.spec';
import { TestConfig } from '../../test.config';
import { BaseTest } from '../../baseMethods/BaseTest';
import { Console } from 'winston/lib/winston/transports';

let alertPage: AlertPage;
let page:Page;
let baseTest: BaseTest;
test.beforeEach(async () => {

      baseTest = new BaseTest();

     page = await baseTest.launchApplication();
    alertPage = new AlertPage(page);
     await alertPage.navigate();

     
});

test.afterEach(async () => {



  await baseTest.tearDown();

});

test('Handle Simple Alert', async () => {

   
    await alertPage.handleSimpleAlert();

    expect(await alertPage.getResultMessage())
        .toContain('You successfully clicked an alert');

});

test.skip('Handle Confirm Alert Accept', async () => {

    await alertPage.handleConfirmAlertAccept();

    expect(await alertPage.getResultMessage())
        .toContain('You clicked: Ok');

});

test.skip('Handle Confirm Alert Dismiss', async () => {

    await alertPage.handleConfirmAlertDismiss();

    expect(await alertPage.getResultMessage())
        .toContain('You clicked: Cancel');

});

test.skip('Handle Prompt Alert', async () => {

    const name = 'Ganesh';

    await alertPage.handlePromptAlert(name);

    expect(await alertPage.getResultMessage())
        .toContain(name);

});