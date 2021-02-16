import { AppLoginPage } from './app.login.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppLoginPage;

  beforeEach(() => {
    page = new AppLoginPage();
  });

  it('should display welcome message', () => {
    page.initNavigation();
    expect(page.getTitleText()).toEqual('Bem vindo!');
  });
  it('should fill wrong username or password and show error message', () => {
    page.fieldPassword.sendKeys("teste")
    page.fieldUsername.sendKeys("teste")

    page.btnLogin.click();

    page.wait(2000);

    expect(page.getById('error-msg-retorno').getText())
      .toEqual('Ops, Algo deu errado');

    expect(page.getByclass('error-1').getText())
      .toEqual('authentication username or password invalid')

    page.wait(2000);
  })

  it('should fill successful login form and redirect to home', () => {
    const username = process.env.SiteMercadoUsername
    const password = process.env.SiteMercadoPassword
    expect(username).not.toBeNull()
    expect(password).not.toBeNull()

    page.fieldUsername.clear()
    page.fieldPassword.clear();

    page.fieldUsername.sendKeys(username)
    page.fieldPassword.sendKeys(password)

    page.btnLogin.click()

    page.wait(2000)

    page.navigateTo('/home')

    expect(page.getCurrentUrl())
      .toEqual('http://localhost:4200/home');
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
