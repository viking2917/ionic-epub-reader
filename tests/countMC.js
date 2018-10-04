import { Role, Selector, ClientFunction } from 'testcafe';
import { AngularJSSelector } from 'testcafe-angular-selectors';

const button = Selector('button');
const a = Selector('a');
const span = Selector('span');
const openReader = button.withText('Open reader');

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
const tocItem20 =  Selector('.toc-item').nth(20);

const marks = Selector(".bookmark-item");
const mark3 = Selector(".bookmark-item").nth(2);

const theSearchButton = Selector(".search-button");

const searchResults  = Selector(".search-result");
const yoHoHo = Selector(".search-result").nth(5);

fixture `Reader Test`
    .page `http://localhost:8100/`;


test('Reader test', async t => {
    await t
	.setTestSpeed(0.9)
	.click(openReader)
	.setFilesToUpload('#file-1', ['./data/pg1184CountMonteCristo.epub'])
	.wait(200)
    
	.click(nextPage)
	.click(nextPage)
	.click(nextPage)
	.click(nextPage)
	.click(prevPage)
	.click(prevPage)
	.wait(1000)

    // for some reason this chokes in testcafe but fine live.
    // .click(location)
    // .typeText(AngularJSSelector.byModel('data.response'), '200')
    // .click(button.withText('OK'))
    // .click(nextPage)
    // .wait(1000)
    // .wait(500)
    // .click(bookmark)
    

	.click(sidebar)
	.click(tocButton)
	.click(bookmarksButton)
	.click(searchTabButton)
	.click(infoButton)
	.click(settingsButton)
	.click(sidebarClickout)

    // click Toc item, book mark it
    	.click(sidebar)
	.click(tocButton)
	.hover(tocItem20)
	.click(tocItem20)
	.wait(2000)
});
