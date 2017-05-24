import { MyunlessDirectivePage } from './app.po';

describe('myunless-directive App', function() {
  let page: MyunlessDirectivePage;

  beforeEach(() => {
    page = new MyunlessDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
