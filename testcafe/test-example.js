import Page from './basic-page-model';

fixture `Proste testy`
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

fixture `Wysyłanie plików`
    .page `https://www.szybkiplik.pl/`;

    test.skip('Test Uploadu Pliku 1', async t => {

        await t
                .setFilesToUpload(page.fileupload, [
                './filestoupload/plik1.txt',
                './filestoupload/plik2.txt'
        ])
                .wait(10000);//czekamy sobie ms 10000ms=10s ostatnia pozycja powinna miec ; pamietajcie o tym
    })
    test.only('Test Uploadu Pliku 2', async t => {

        await t
                .navigateTo(`https://www.filemail.com/pl`) //mimo wszystko ze mamy page na fixture mozemy albo od razu zmienic url na inny albo w trakcie testu przejs jeszcze gdzies indziej
                .setFilesToUpload(page.fileupload2, [
                './filestoupload/plik1.txt',
                './filestoupload/plik2.txt'
        ])
                .wait(10000);//czekamy sobie ms 10000ms=10s ostatnia pozycja powinna miec ; pamietajcie o tym
    })
    ;