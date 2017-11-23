import { NgxDigitalClockPage } from './app.po';

describe('ngx-digital-clock App', () => {
  let page: NgxDigitalClockPage;

  beforeEach(() => {
    page = new NgxDigitalClockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
