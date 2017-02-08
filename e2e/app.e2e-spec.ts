import { Practica1Page } from './app.po';

describe('practica1 App', function() {
  let page: Practica1Page;

  beforeEach(() => {
    page = new Practica1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
