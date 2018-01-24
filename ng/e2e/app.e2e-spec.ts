import { BasicAngular2Page } from './app.po';

describe('basic-angular2 App', () => {
  let page: BasicAngular2Page;

  beforeEach(() => {
    page = new BasicAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
