import { WebsPage } from './app.po';

describe('webs App', () => {
  let page: WebsPage;

  beforeEach(() => {
    page = new WebsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
