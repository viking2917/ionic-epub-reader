import { Role, Selector, ClientFunction } from 'testcafe';
import { AngularJSSelector } from 'testcafe-angular-selectors';

const button = Selector('button');
const a = Selector('a');
const span = Selector('span');
const treasureIsland = button.withText('Treasure Island');
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

const theSearchButton = Selector(".search-button");

const searchResults  = Selector(".search-result");
const yoHoHo = Selector(".search-result").nth(5);

fixture `Reader Test`
    .page `http://localhost:8100/`;


test('Reader test', async t => {
    await t
	//.setTestSpeed(0.9)
	.click(treasureIsland)
	.click(nextPage)
	.click(nextPage)
	.click(nextPage)
	.click(nextPage)
	.click(prevPage)
	.click(prevPage)
	//.wait(1000)
	.click(location)
	.typeText(AngularJSSelector.byModel('data.response'), '100')
	.click(button.withText('OK'))
    
	.click(bookmark)
	.click(sidebar)
	.click(tocButton) // .wait(1000)
	.click(bookmarksButton) // .wait(1000)
	.click(searchTabButton)
	.click(infoButton)
	.click(settingsButton)
	.click(sidebarClickout)
	//.wait(2000)
    
    // click Toc item, book mark it
    	.click(sidebar)
	.click(tocButton)
	.hover(tocItem2)
	.click(tocItem2)
	.click(bookmark)
	.click(sidebar)
	.click(tocButton)
	.hover(tocItem5)
	.click(tocItem5)
	.click(bookmark)

    // check if bookmarks are there
    	.click(sidebar)
	.click(bookmarksButton) // .wait(1000)
	.expect(marks.count).eql(3)

    // test clicking bookmarked items
	.click(sidebar)
	.click(bookmarksButton)
	.hover(mark3)
	.click(mark3)

    // test search
	.click(sidebar)
    	.click(searchTabButton)
    	.typeText(AngularJSSelector.byModel('state.searchQuery'), 'rum')
	.click(theSearchButton)
	.click(yoHoHo)
    
	.wait(200)
    
});
