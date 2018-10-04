#bash

testcafe "chrome:emulation:device=iphone 6" tests/basic.js
testcafe safari tests/notes.js
testcafe chrome tests/notes.js
testcafe chrome tests/selection.js
testcafe "chrome:emulation:device=iPad Mini" tests/39steps.js
testcafe "chrome:emulation:device=iphone X" tests/lesMiz.js
testcafe "chrome:emulation:device=Pixel 2" tests/countMC.js

