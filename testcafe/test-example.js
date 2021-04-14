import Page from './basic-page-model';

fixture `My pierwsza fixturamikstura`
    .page `https://duckduckgo.com/`;

const page = new Page();

test('Moj super tescik', async t => {
    await t
        .typeText(page.searchInput, 'pogoda lublin')
        .click(page.searchButton)
		.wait(10000)//czekamy sobie ms 10000ms=10s
        //.click(page.featureList[0].checkbox)
       // .click(page.interfaceSelect)
       // .click(page.interfaceSelectOption.withText('Both'))
       // .expect(page.nameInput.value).contains('Peter');
})
test('Drugi test sprawdzajacy', async t => {
	await t
    .typeText(page.searchInput, 'wiadomosci')
        .click(page.searchButton)
		.wait(10000)//czekamy sobie ms 10000ms=10s
})
;