import { Page, expect } from "@playwright/test";
import HomePage from "./HomePage";
import logger from "../utils/LoggerUtil";

export default class LoginPage {

    //constructor
    constructor(private page: Page) {}

    //Object Repository
    private readonly userNametxt='#user-name';
    private readonly passwordtxt='#password';
    private readonly loginbtn='login-button'

    //Action   

async quickLogin(username: string, password: string) {
    await this.navigateToLoginPage();
    await this.fillUsername(username);
    await this.fillPassword(password);
    return await this.clickLoginButton();
  }

  async navigateToLoginPage() {
    await this.page.goto("https://www.saucedemo.com/");
    await expect(this.page).toHaveTitle('Swag Labs');
    await expect(this.page).toHaveURL('https://www.saucedemo.com/');
  }

  async fillUsername(username: string) {
    await this.page.fill(this.userNametxt,username);
    logger.info("Filled username");
  }
   
  async fillPassword(password: string) {
    await this.page.fill(this.passwordtxt,password);
    logger.info("Filled password");
  }

  async clickLoginButton() {
    await this.page
      .locator(this.loginbtn)
      .click()
      .catch((error) => {     
        logger.error("Error clicking login button",error);
        throw error; // rethrow the error if needed
      })
      .then(() => logger.info("Clicked login button"));

    const homePage = new HomePage(this.page);
    return homePage;
  }
}