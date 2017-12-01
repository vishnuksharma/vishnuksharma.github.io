import { VishnuksharmaPage } from './app.po';

describe('vishnuksharma App', () => {
  let page: VishnuksharmaPage;

  beforeEach(() => {
    page = new VishnuksharmaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
