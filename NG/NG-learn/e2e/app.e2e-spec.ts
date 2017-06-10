import { NGLearnPage } from './app.po';

describe('ng-learn App', () => {
  let page: NGLearnPage;

  beforeEach(() => {
    page = new NGLearnPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
