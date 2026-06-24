import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30 * 1000,   
  testDir: './tests',
  fullyParallel: true,

  retries:1,
,
  workers: 1,

  reporter: [
    ['html'],
    ['allure-playwright'],
   // ['dot'],
    ['list']
  ],

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    //headless: false,
    viewport: { width: 1280, height: 720 }, 
    ignoreHTTPSErrors: true, 
    permissions: ['geolocation'], 
  },

  //grep: /@master/,

  projects: [
    {},
    /** 
   {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
*/
    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    } */
  ],


});
