import { DemoNewPage } from './app.po';

describe('demo-new App', () => {
  let page: DemoNewPage;

  beforeEach(() => {
    page = new DemoNewPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
