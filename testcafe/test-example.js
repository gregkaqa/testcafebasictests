import Page from './basic-page-model';

fixture `My pierwsza fixturamikstura`
    .page `https://duckduckgo.com/`;

const page = new Page();

 test('Test Numer 1', async t => {
     await t
        .typeText(page.searchInput, 'pogoda lublin')
        .click(page.searchButton)
 })
 test('Test Numer 2', async t => {
    await t
       .typeText(page.searchInput, 'pogoda lublin')
       .click(page.searchButton)
})
test.only('Test Numer 3', async t => {
    await t
       .typeText(page.searchInput, 'pogoda lublin')
       .click(page.searchButton)
        .wait(10000)//czekamy sobie ms 10000ms=10s
})
test('Test Numer 4', async t => {
await t
        .typeText(page.searchInput, 'krzywa wieża w pizie')
        .click(page.searchButton)
		.wait(10000)//czekamy sobie ms 10000ms=10s
        .expect(page.body.innerText).contains('Wieża ma 115 m', 'Sprawdzamy czy znajdziemy informacje o wyskosci wiezy w sekcji linkow', { timeout: 5000 });
})
;