import { BoycottProjPage } from './app.po';

describe('boycott-proj App', () => {
  let page: BoycottProjPage;

  beforeEach(() => {
    page = new BoycottProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
