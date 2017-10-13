import { LineupBuilderPage } from './app.po';

describe('lineup-builder App', () => {
  let page: LineupBuilderPage;

  beforeEach(() => {
    page = new LineupBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
