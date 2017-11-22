import { MyNewSitePage } from './app.po';

describe('my-new-site App', function() {
  let page: MyNewSitePage;

  beforeEach(() => {
    page = new MyNewSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
