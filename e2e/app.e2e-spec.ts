import { Angular2EnglishPage } from './app.po';

describe('angular2-english App', () => {
  let page: Angular2EnglishPage;

  beforeEach(() => {
    page = new Angular2EnglishPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
