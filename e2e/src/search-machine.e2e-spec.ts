import {AppPage} from './app.po';
import {browser, by, element} from 'protractor';

describe('Search machine', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to machine search web page', () => {

    page.navigateTo('/MachineSearch');
    expect(page.getById('ident').getText()).toEqual('Identification:');
  });
/*
  it('should not display machine identification', () => {

    page.getById('clickGetMachine').click();
    expect(page.getById('identification').getText()).toEqual('');
  });
*/

/*  it('should display machine identification', () => {

    element(by.id('machineId')).sendKeys('2');
    page.getById('clickGetMachine').click();
    expect(page.getById('identification').getText()).toEqual(''); /!*n2340dh47647*!/
  });
  */
});
