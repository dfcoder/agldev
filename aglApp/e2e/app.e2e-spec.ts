import { AglAppPage } from './app.po';

describe('agl-app App', function() {
  let page: AglAppPage;

  beforeEach(() => {
    page = new AglAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
