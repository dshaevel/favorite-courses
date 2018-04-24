import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavbarText() {
    return element(by.css('favorite-courses-root nav div.navbar-brand')).getText();
  }
}
