import { browser, by, element } from 'protractor';
import { AppBasePage } from '../app.base.po';

export class AppLoginPage extends AppBasePage {

  initNavigation() {
    this.navigateToHome()
    this.navigateTo('/account/login')
  }

  getTitleText(): Promise<string> {
    return element(by.xpath(`/html/body/app-root/div/div/account-app-root/app-login/h1`)).getText() as Promise<string>;
  }

  fieldPassword = element(by.id("password"));
  fieldUsername = element(by.id("username"));
  btnLogin = element(by.id("btn-login"));


}
