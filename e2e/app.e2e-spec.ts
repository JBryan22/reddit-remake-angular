import { RedditRemakePage } from './app.po';

describe('reddit-remake App', () => {
  let page: RedditRemakePage;

  beforeEach(() => {
    page = new RedditRemakePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
