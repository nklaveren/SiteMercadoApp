import { browser, by, element } from 'protractor';
import { AppBasePage } from '../app.base.po';
import { AppLoginPage } from '../login/app.login.po';

export class ProductPage extends AppBasePage {

  constructor() { super() }

  initNavigation() {
    this.navigateToHome()
    this.login();
  }

  fieldDescription = element(by.id('description'));
  fieldPrice = element(by.id('price'));
  fieldImage = element(by.id('image'));
  btnSalvar = element(by.id('btn-salvar'));


}
