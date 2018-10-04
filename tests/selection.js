// this uses the ClientFunction hack to simulate a range selection in the app. 
// something is funky with the range that gets selected, it is missing text and such, so the bookmark & note created end up funky.
// this test mostly useful for ensuring the selection event does trigger the actionsheet menu.

import { Role, Selector, ClientFunction } from 'testcafe';
import { AngularJSSelector } from 'testcafe-angular-selectors';

const button = Selector('button');
const treasureIsland = button.withText('Treasure Island');
const sidebar = Selector('#sidebar');

const bookmarksButton = Selector('#bookmarksButton');
const searchTabButton = Selector('#searchButton');
const sidebarClickout = Selector('.sidebar-wrapper-left');
const theSearchButton = Selector(".search-button");

const searchResults  = Selector(".search-result");
const yoHoHo = Selector(".search-result").nth(5);
const readerIFrame = Selector('iframe');
const paragraph =  Selector('p').withText('house shaking').filterVisible();
const theNote = Selector("span.bookmark-entry-annotation").withText('This is a note');

const selectElement = (selector) => ClientFunction(() => {
    const selection = document.getSelection();
    const range = document.createRange();

    range.selectNode(selector());
    selection.addRange(range);
}, { dependencies: { selector } });

fixture `Reader Test`
    .page `http://localhost:8100/`;


test('Reader test', async t => {
    await t
    //.setTestSpeed(0.9)
	.click(treasureIsland)
    
    // test search
	.click(sidebar)
    	.click(searchTabButton)
    	.typeText(AngularJSSelector.byModel('state.searchQuery'), 'rum')
	.click(theSearchButton)
	.click(yoHoHo)
	.switchToIframe(readerIFrame)
	.hover(paragraph);

    await selectElement(paragraph)();
    await t
	.wait(1000)
	.switchToMainWindow()
	.click(button.withText('Create Note'))
	.typeText(AngularJSSelector.byModel('$parent.post.message'), 'This is a note')
	.click(button.withText('Save'))
    	.click(sidebar)
	.click(bookmarksButton)
	.expect(theNote.count).eql(1)
	.wait(1000);

 //   await t.debug();
});
