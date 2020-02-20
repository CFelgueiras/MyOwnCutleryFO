import {AppPage} from './app.po';
import {browser, by, element} from 'protractor';

describe('Machine type operations', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to machine search web page', () => {

    page.navigateTo('/OperationsMachType');
    expect(page.getById('name').getText()).toEqual('Name:');
  });
/*
  it('should not display operation information', () => {

    page.getById('clickGetOperations').click();
    expect(page.getById('operationName').getText()).toEqual('');
  });*/
/*
  it('should display operation information', () => {

    element(by.id('machineId')).sendKeys('2');
    page.getById('clickGetOperations').click();
    expect(page.getById('operationName').getText()).toEqual('');
  });*/
});
