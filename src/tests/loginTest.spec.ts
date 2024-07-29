const { test, expect } = require('@playwright/test');
import LoginPage from '../pages/loginPage';
import logger from "../utils/LoggerUtil";

test('Login Page',async ({page})=>{

    const loginPage = new LoginPage(page);
    await loginPage.quickLogin("standard_user","secret_sauce");
    logger.info("Logged in successfully");
    await page.close();
} )