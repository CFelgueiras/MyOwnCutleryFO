import {AppPage} from './app.po';
import {browser, by, element, protractor} from 'protractor';

describe('Create client', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to client create web page', () => {

    page.navigateTo('/CreateClient');
    browser.sleep(3000);
    expect(page.getById('name').getText()).toEqual('Enter name:');
  });

  /*it('should emit alert Machine identification is mandatory.', () => {

    page.getById('button').click();

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.alertIsPresent(), 5000, 'Alert is not getting present :(');
    const ale = browser.switchTo().alert().getText();
    browser.switchTo().alert().accept();
    expect(ale).toEqual('Must add name');
    });*/
/*
  it('should emit alert Machine created successfully.', () => {

    element(by.id('machineident')).sendKeys('machineTest');
    page.getById('button').click();

    const EC = protractor.ExpectedConditions;
    browser.wait(EC.alertIsPresent(), 5000, 'Alert is not getting present :(');
    const ale = browser.switchTo().alert().getText();
    browser.switchTo().alert().accept();
    expect(ale).toEqual('Machine successfully added.');
  });*/
});
