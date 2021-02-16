import { browser, logging } from 'protractor';
import { ProductPage } from './product.po';

const defaultTime = 1000
describe('workspace-project App', () => {
  let page: ProductPage

  beforeEach(() => {
    page = new ProductPage();
  });

  it('should create a new product', () => {

    page.initNavigation()
    page.navigateToLink('Produtos')


    expect(page.getElementByXpath('/html/body/app-root/div/div/product-app-root/app-list-all/h1')
      .getText()).toEqual("Lista de produtos")

    page.wait(defaultTime)

    page.navigateToLink("Novo Produto")
    page.wait(defaultTime)

    expect(page.getElementByXpath('/html/body/app-root/div/div/product-app-root/app-create/h1')
      .getText()).toEqual("Cadastro")

    page.fieldDescription.sendKeys('product auto-test');
    page.fieldPrice.sendKeys('100,00');
    page.fieldImage.sendKeys('http://img.rnd/200');

    page.btnSalvar.click()

    page.wait(defaultTime)

    expect(page.getById('msgRetorno').getText())
      .toEqual("Ação realizada com sucesso!")

    page.navigateToLink('Produtos')

    expect(page.getElementByXpath('/html/body/app-root/div/div/product-app-root/app-list-all/h1')
    .getText()).toEqual("Lista de produtos")

    page.wait(defaultTime)

    page.getElementByXpath('/html/body/app-root/div/div/product-app-root/app-list-all/table/tbody[1]/tr/td[4]/div/button[1]')
      .click();

    page.wait(defaultTime);

    page.fieldDescription.clear()

    page.fieldDescription.sendKeys('product edit auto-test');

    page.btnSalvar.click();

    page.wait(defaultTime)

    expect(page.getById('msgRetorno').getText())
      .toEqual("Ação realizada com sucesso!")

    page.wait(defaultTime)

    page.navigateToLink("Produtos")
    page.wait(defaultTime)

    page.getElementByXpath("/html/body/app-root/div/div/product-app-root/app-list-all/table/tbody/tr/td[4]/div/button[2]").click()

    page.getById('btn-confirm-remove').click();

    page.wait(defaultTime);

    expect(page.getById('msgRetorno').getText())
      .toEqual("Ação realizada com sucesso!")

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
