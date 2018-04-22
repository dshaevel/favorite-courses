import { AppPage } from './app.po';

describe('Favorite Courses App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getNavbarText()).toEqual('Welcome to Favorite Courses 1.0.0');
  });
});
