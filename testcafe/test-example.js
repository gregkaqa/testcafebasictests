import Page from './basic-page-model';

fixture `My pierwsza fixturamikstura`
    .page `https://duckduckgo.com/`;

const page = new Page();

 test.skip('Test Numer 1', async t => {
     await t
        .typeText(page.searchInput, 'pogoda lublin')
        .click(page.searchButton)
 })
 test.skip('Test Numer 2', async t => {
    await t
       .typeText(page.searchInput, 'pogoda lublin')
       .click(page.searchButton)
})
test.skip('Test Numer 3', async t => {
    await t
       .typeText(page.searchInput, 'pogoda lublin')
       .click(page.searchButton)
        .wait(10000)//czekamy sobie ms 10000ms=10s
})
test.skip('Test Numer 4', async t => {
await t
        .typeText(page.searchInput, 'krzywa wieża w pizie')
        .click(page.searchButton)
		.wait(10000)//czekamy sobie ms 10000ms=10s
        .expect(page.body.innerText).contains('Wieża ma 115 m', 'Sprawdzamy czy znajdziemy informacje o wyskosci wiezy w sekcji linkow', { timeout: 5000 });
})

fixture `My druga fixturamikstura`
    .page `https://www.szybkiplik.pl/`;

    test.only('Test Numer 4', async t => {
        await t
        .setFilesToUpload(page.fileupload, [
            './filestoupload/plik1.txt',
            './filestoupload/plik2.txt'
        ])
        .wait(60000)//czekamy sobie ms 10000ms=10s
        .click(page.fileuploadlinks)
                .wait(10000)//czekamy sobie ms 10000ms=10s
        })
    
;