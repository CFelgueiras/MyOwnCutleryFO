import {AppPage} from './app.po';
import {browser, by, element, protractor} from 'protractor';

describe('Create product', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to product create web page', () => {

    page.navigateTo('/Product');
    expect(page.getById('ident').getText()).toEqual('Enter product name:');
  });

  it('should emit alert Product name is mandatory.', () => {

    page.getById('clickAddProduct').click();

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.alertIsPresent(), 5000, 'Alert is not getting present :(');
    const ale = browser.switchTo().alert().getText();
    browser.switchTo().alert().accept();
    expect(ale).toEqual('Product name is mandatory.');
  });

  it('should emit alert Product successfully added.', () => {

    element(by.id('productname')).sendKeys('producttest');
    page.getById('clickAddProduct').click();

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.alertIsPresent(), 5000, 'Alert is not getting present :(');
    const ale = browser.switchTo().alert().getText();
    browser.switchTo().alert().accept();
    expect(ale).toEqual('Product successfully added.');
  });
});
