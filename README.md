An ePub reader for browsers and mobile devices (via Ionic/Angular).

Implemented as an Angular directive, compatible with Ionic / Angular v1, intended for inclusion into other Ionic apps. A sample Ionic app shows how to integrate to a larger Ionic app. Work is currently under way to integrate this reader into [Bookship](https://www.bookshipapp.com), a Social Reading app. 

ionic-epub-reader is a reworking of [Patrick G](https://github.com/geek1011)'s excellent [ePubViewer](https://github.com/geek1011/ePubViewer), to make it compatible with [AngularJS] v1 and [Ionic v1](https://ionicframework.com/docs/v1/), to make it mobile-friendly, and to introduce additional capabilities. The feature set is intended to be comparable to those of major readers such as the Kindle and Kobo apps.

Key features introduced by Ionic-epub-reader include:

* Bookmarking - pages can be bookmarked. 
* Highlighting - passages can be selected and marked for permanent highlighting
* Annotation - highlights can optionally have user-generated notes attached to them.
* Integration with external search engines - searches of Google & Wikipedia can be invoked directly from highlighted text, with results shown in a new browser window.
* Paging via swiping

An additional tab has been added which lists all Bookmarks, Highlights and Notes, and allows navigation within the book to each item.

Ionic-epub-reader is intended for integration with other apps. All major reader lifecycle events generate Angular events with the data necessary for external apps to handle storage / reload of the relevant data. The sample app shows handling of those lifecycle events. The primary component is a custom AngularJS Directive encapsulating the viewer. You can easily add this as a module to your own app. 

Optionally, Ionic-epub-reader will also store all user data in localStorage. It is expected this is primarily of use for standalone usage, or for testing. 

This repo includes a sample ionic App app illustrating use.

## Installation

Start a new Ionic v1 project as follows:

Ensure you have Ionic V1 installed.

```
ionic start ionic-epub-reader blank --type ionic1
```

This directive makes use of two Ionic/Cordova plugins, the [inAppBrowser](https://github.com/apache/cordova-plugin-inappbrowser) and StatusBar, you will need to install them as well:

```
cordova plugin add cordova-plugin-inappbrowser
cordova plugin add cordova-plugin-statusbar
```

#### Using script tag

Modify your index.html file to include the following:

```html
<link rel="stylesheet" href="lib/normalize.min.css">
<link href="css/readerstyle.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Arbutus+Slab" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet">
<script src="lib/sanitize-html.min.js"></script>
<script src="lib/jszip.min.js"></script>
<script src="lib/epub.js"></script>
<script src="js/angularEpubReader.js"></script>
```

Include the custom directive in your index.html file, or in a template.

```html
<ion-pane>
    <ion-content overflow-scroll="true">
    	<epubreader></epubreader>
    </ion-content>
 </ion-pane>
```

The directive accepts arguments per the below:

The `<epubreader>` directive accepts arguments:

* `src`: a url pointing to an ePub file to load. If not present, the user is presented with an open file button.
* `use-local-storage`: true|false, controls whether user data (e.g. bookmarks) are persisted to the browser's localStorage

#### Add module "epubreader" as dependency
```js
angular.module('starter', ['ionic', 'epubreader'])
```

The directive relies on a small number of images (primarily custom icons), which must be located in "../img/".

In order for the in-app browser and associated Google and Wikipedia features to work, you must:

```
ionic cordova add platform browser
```

then 'ionic serve' will allow the in-app browser window to work.


### Loading an ePub file

Once the app is running you should see a button entitled 'Open a Book'. Hit that button and load an epub file, e.g. [Treasure Island](http://www.gutenberg.org/ebooks/120) - the file called
_EPUB (with images)_ works nicely. Ionic-epub-reader has been tested with works from [Project Gutenburg](http://www.gutenberg.org/) as well as [Standard Ebooks](https://standardebooks.org/).


## Technologies used in this project

- [AngularJS] 
- [IonicV1]
- [inAppBrowser]
- [ePub.js](https://github.com/futurepress/epub.js/)
- [normalize.css](https://necolas.github.io/normalize.css/) / [sanitizeHtml](https://www.npmjs.com/package/sanitize-html)

### Prerequisites

You will need to have Ionic V1 installed to run the sample app.

### Changes from ePubViewer.

This reader contains a number of features the original reader by [Patrick G](https://github.com/geek1011) did not. 

Parts of it are substantially re-written, parts become quite a bit simpler by using the Angular templating system, other parts (styling, for
example) are mostly unchanged, except to rename some classes to prevent collision with Ionic's built-in styling classes. I have also removed the original project's dependency on jQuery. I have also updated the font selection and made minor improvements (I hope!) to the styling.

A simpler, pure Angular/Ionic version of that reader, without the extra bells & whistles, can be found here: [angular-epub-reader](https://github.com/viking2917/angular-epub-reader). It is more-or-less a straight AngularJS/Ionic port of [ePubViewer](https://github.com/geek1011/ePubViewer).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Gotchas & Oddities

I found that the Ionic keyboard (done with the native plugin) will cause screen resizes after the keyboard is displayed. This causes the epub to redisplay. When the screen is resized and
then redisplayed you may find yourself on a different page than when you started the keyboard. This was particularly evident on editing Notes, after editing you would be left on a different page, where the note
was not visible. Theoretically setting

```
<preference name="KeyboardResize" value="false" />
```

should do it, but it seems not to work on Android. I adopted [this workaround](https://github.com/ionic-team/cordova-plugin-ionic-keyboard/issues/8) from @olivermuc.

Ionic-epub-reader has been tested on iOS and Android devices, Chrome, and to a lessor extent Firefox. Browser bugs entirely possible. :)

## Acknowledgments

Greatful thanks to 

* [Patrick G](https://github.com/geek1011), the original author of [ePubViewer](https://github.com/geek1011/ePubViewer)- his reader code was straightforward to understand, adapt and extend.
* [Futurepress](http://futurepress.org), for creating ePub.js[https://github.com/futurepress/epub.js/] in the first place. 

[angularjs]:http://angularjs.org
[ionicV1]:https://ionicframework.com/docs/v1/
[inAppBrowser]:https://github.com/apache/cordova-plugin-inappbrowser
