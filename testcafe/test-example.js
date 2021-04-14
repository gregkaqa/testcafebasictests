import Page from './basic-page-model';

fixture `My pierwsza fixturamikstura`
    .page `https://duckduckgo.com/`;

const page = new Page();

// test('Moj super tescik', async t => {
//     await t
//         .typeText(page.searchInput, 'pogoda lublin')
//         .click(page.searchButton)
// 		.wait(10000)//czekamy sobie ms 10000ms=10s
//         //.click(page.featureList[0].checkbox)
//        // .click(page.interfaceSelect)
//        // .click(page.interfaceSelectOption.withText('Both'))
//        // .expect(page.nameInput.value).contains('Peter');
// })
test('Drugi test ASERCJE', async t => {
await t
        .typeText(page.searchInput, 'krzywa wieża w pizie')
        .click(page.searchButton)
		.wait(10000)//czekamy sobie ms 10000ms=10s
        .expect(page.body.innerText).contains('Wieża ma 115 m', 'Sprawdzamy czy znajdziemy informacje o wyskosci wiezy w sekcji linkow', { timeout: 5000 });
})
;