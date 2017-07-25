import { Angular.L1Page } from './app.po';

describe('angular.l1 App', () => {
  let page: Angular.L1Page;

  beforeEach(() => {
    page = new Angular.L1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
