const { test, expect } = require('@playwright/test');

test('GitHub Login Page',async ({page})=>{

   await page.goto('https://github.com/');

   const pageTitle=await page.title();
    console.log('Page title is:', pageTitle);

    await expect(page).toHaveTitle('GitHub: Let’s build from here · GitHub');

    const pageURL=await page.url();
    console.log('Page URL is:',pageURL);

    await expect(page).toHaveURL('https://github.com/');

    //   await page.locator('xpath=(//a[@href=/login])[2]').click();
     await page.getByRole('link', { name: 'Sign in' }).click();

    await page.close();

} )