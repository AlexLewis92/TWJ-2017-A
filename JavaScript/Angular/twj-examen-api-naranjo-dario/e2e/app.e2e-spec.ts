import { TwjExamenApiNaranjoDarioPage } from './app.po';

describe('twj-examen-api-naranjo-dario App', () => {
  let page: TwjExamenApiNaranjoDarioPage;

  beforeEach(() => {
    page = new TwjExamenApiNaranjoDarioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
