import {browser, by, element, ElementArrayFinder} from 'protractor';

export class AppPage {
  navigateTo(url: string): any {
    return browser.get(url);
  }

  getTitleText() {
    return element(by.id('title')).getText() as Promise<string>;
  }

  getById(id) {
    return element(by.id(id));
  }

  getAllByTag(tag: string) {
    return element.all(by.tagName(tag));
  }

  getElementByClass(elemClass: string): any {
    return element(by.className(elemClass));
  }

  getButtonByText(id: string): any {
    return element(by.partialButtonText(id));
  }

  getByCss(id) {
    return element(by.css(id));
  }

  getSortIcons(sortIconClass: string): ElementArrayFinder {
    return element.all(by.css(sortIconClass));
  }

  selectType() {
    return element.all(by.id('type-select'));
  }
}
