import { browser, by, element, ExpectedConditions } from "protractor";

export abstract class AppBasePage {
  constructor() {
    browser.driver.manage().window().maximize();
  }

  navigateToHome() {
    return browser.get(browser.baseUrl) as Promise<any>
  }

  navigateTo(url: string) {
    return browser.get(url) as Promise<any>;
  }

  navigateToLink(link: string) {
    browser.wait(ExpectedConditions.elementToBeClickable(element(by.linkText(link))))
      .then(() => {
        return element(by.linkText(link)).click();
      });
  }

  getElementByXpath(xpath: string) {
    return element(by.xpath(xpath));
  }

  getById(id: string) {
    return element(by.id(id));
  }
  getByclass(className: string) {
    return element(by.className(className));
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  wait = (ms: number) => {
    browser.sleep(ms);
  }

  fieldPassword = element(by.id("password"));
  fieldUsername = element(by.id("username"));
  btnLogin = element(by.id("btn-login"));
  login() {
    this.navigateTo('/account/login')
    const username = process.env.SiteMercadoUsername
    const password = process.env.SiteMercadoPassword
    expect(username).not.toBeNull()
    expect(password).not.toBeNull()

    this.fieldUsername.sendKeys(username)
    this.fieldPassword.sendKeys(password)
    this.btnLogin.click();
    this.wait(5000);
  }

}
