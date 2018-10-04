import { Role, Selector, ClientFunction } from 'testcafe';
import { AngularJSSelector } from 'testcafe-angular-selectors';

const button = Selector('button');
const a = Selector('a');
const span = Selector('span');
const treasureIsland = button.withText('Treasure Island w/');
const nextPage = Selector('#nextPage');
const prevPage = Selector('#prevPage');
const location = Selector('#locationEntry');
const bookmark = Selector('#bookmark');
const sidebar = Selector('#sidebar');

const tocButton = Selector('#tocButton');
const bookmarksButton = Selector('#bookmarksButton');
const searchTabButton = Selector('#searchButton');
const infoButton = Selector('#infoButton');
const settingsButton = Selector('#settingsButton');
const sidebarClickout = Selector('.sidebar-wrapper-left');

const tocItem2 =  Selector('.toc-item').nth(2);
const tocItem5 =  Selector('.toc-item').nth(5);

const marks = Selector(".bookmark-item");
const mark3 =  Selector(".bookmark-item").nth(2);

const theHighlight = Selector(".bookmark-item").nth(0);
const theSearchButton = Selector(".search-button");

const searchResults  = Selector(".search-result");
const yoHoHo = Selector(".search-result").nth(5);

const readerIFrame = Selector('iframe');
const theP = Selector("p").withText("house shaking");

const theNote = Selector("span.bookmark-entry-annotation").withText('This is a note again');

const blackspotHighlight = Selector(".bookmark-item").nth(3);
const blackspot = Selector("span").withText("The Black Spot");


fixture `Reader Test`
    .page `http://localhost:8100/`;


test('Reader test', async t => {
    await t
	//.setTestSpeed(0.9)
	.click(treasureIsland)
	.click(nextPage)

	.click(sidebar)
	.click(tocButton)  .wait(1000)
	.click(bookmarksButton)  .wait(1000)

    // check if bookmarks got loaded
	.expect(marks.count).eql(4)

    // test clicking bookmarked items
	.hover(mark3)
	.click(mark3)

	.click(sidebar)
	.click(bookmarksButton)
	.click(theHighlight)

	.wait(200)
	.switchToIframe(readerIFrame)
	.click(theP)
	.switchToMainWindow()
        .click(button.withText('Create Note'))

	.typeText(AngularJSSelector.byModel('$parent.post.message'), 'This is a note')
	.click(button.withText('Save'))

	.switchToIframe(readerIFrame)
	.click(theP)
	.switchToMainWindow()

	.click(button.withText('Edit Note'))
	.typeText(AngularJSSelector.byModel('$parent.post.message'), 'This is a note again')
	.wait(500)
	.click(button.withText('Save'))

    // is the note we created showing up on the bookmarks tab?
    	.click(sidebar)
	.click(bookmarksButton)
	.expect(theNote.count).eql(1)

    // go to next highlight for testing google/wikipedia
    
	.hover(blackspotHighlight)
	.click(blackspotHighlight)
	.switchToIframe(readerIFrame)
	.click(blackspot)
	.switchToMainWindow()
        .click(button.withText('Wikipedia'))
	.wait(3000)
});
