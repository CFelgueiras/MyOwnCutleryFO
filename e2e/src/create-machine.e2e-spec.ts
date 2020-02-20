import {AppPage} from './app.po';
import {browser, by, element, protractor} from 'protractor';

describe('Create machine', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should navigate to login web page', () => {
    page.navigateTo('/login');
    element(by.id('email')).sendKeys('sara.peixoto@hotmail.com');
    element(by.id('password')).sendKeys('12345');
    page.getById('loginButton').click();
    browser.sleep(6000);
  });

  it('should navigate to machine create web page', () => {
    page.navigateTo('/Machine');
    browser.sleep(3000);
    expect(page.getById('ident').getText()).toEqual('Enter machine identification:');
  });

  it('should emit alert Machine identification is mandatory.', () => {
    page.getById('clickAddMachine').click();

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.alertIsPresent(), 5000, 'Alert is not getting present :(');
    const ale = browser.switchTo().alert().getText();
    browser.switchTo().alert().accept();
    expect(ale).toEqual('Machine identification is mandatory.');
    });

  it('should emit alert Machine created successfully.', () => {
    element(by.id('machineident')).sendKeys('machineTest');
    page.getById('clickAddMachine').click();

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.alertIsPresent(), 5000, 'Alert is not getting present :(');
    const ale = browser.switchTo().alert().getText();
    browser.switchTo().alert().accept();
    expect(ale).toEqual('Machine successfully added.');
  });
});
