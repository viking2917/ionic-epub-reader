import { Role, Selector, ClientFunction } from 'testcafe';
import { AngularJSSelector } from 'testcafe-angular-selectors';

const button = Selector('button');
const a = Selector('a');
const span = Selector('span');
const openReader = button.withText('Open reader');

const nextPage = Selector('#nextPage');
const sidebar = Selector('#sidebar');
const settingsButton = Selector('#settingsButton');

fixture `Reader Test`
    .page `http://localhost:8100/`;

test('Reader test', async t => {
    await t
	.setTestSpeed(0.9)
	.click(openReader)
	.setFilesToUpload('#file-1', ['./data/robert-louis-stevenson_treasure-island.epub'])
	.wait(200)
    
	.click(nextPage).click(nextPage)
	.click(nextPage).click(nextPage)
	.click(nextPage).click(nextPage)
	.wait(1000)
	.click(sidebar)
	.click(settingsButton);

    var themeChips = Selector('div.chip');
    var count    = await themeChips.count;

    // just the themes
    for (var i = 0; i < 6; i++) {
	await t.click(sidebar).click(settingsButton).click(themeChips.nth(i)).wait(200);
    }

    // just the fonts in normal font size and theme colors
    await t.click(sidebar).click(settingsButton).click(themeChips.nth(0));
    for (var i = 6; i < 13; i++) {
	await t.click(sidebar).click(settingsButton).click(themeChips.nth(i)).wait(200);
    }

    // all items
    for (var i = 0; i < count; i++) {
	await t.click(sidebar).click(settingsButton).click(themeChips.nth(count - i - 1)).wait(200);
    }

    await t
	.click(sidebar)
	.click(settingsButton)
	.click(a.withText('Reset All'))
	.click(button.withText('OK'))
    .wait(2000)
    
});
