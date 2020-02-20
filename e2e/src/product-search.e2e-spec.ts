import {AppPage} from './app.po';
import {browser, by, element} from 'protractor';

describe('Search product', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
/*
  it('should navigate to product search web page', () => {

    page.navigateTo('/ProductSearch');
    expect(page.getById('span').getText()).toEqual('Enter product ID:');
  });*/

/*
  it('should not display product name', () => {

    page.getById('clickGetProduct').click();
    expect(page.getById('prodname').getText()).toEqual('');
  });*/

/*
  it('should display product name', () => {

    element(by.id('productId')).sendKeys('2');
    page.getById('clickGetProduct').click();
    expect(page.getById('prodname').getText()).toEqual('');
  });*/
});
