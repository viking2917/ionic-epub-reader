// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('readerDemo', ['ionic', 'epubreader'])

.controller('ReaderCtrl', function($scope, $rootScope, $ionicActionSheet, $ionicPopover) {

    $rootScope.$on('epubReaderBookmarkSave', function (event, data) {
    	console.log('bookmark save', event, JSON.stringify(data.bookmark));
    });

    $rootScope.$on('epubReaderBookmarkDelete', function (event, data) {
    	console.log('bookmark save', event, JSON.stringify(data.bookmark));
    });
	
    $rootScope.$on('epubReaderSaveSettings', function (event, data) {
    	console.log('save settings requested', event, JSON.parse(data.settings));
    });

    $rootScope.$on('epubReaderCurrentLocation', function (event, data) {
    	console.log('current position set', event, data.position);
    });
    
    $rootScope.$on('epubReaderNextPage', function (event, data) {
    	console.log('paging (next)', event, data);
    });

    $rootScope.$on('epubReaderPrevPage', function (event, data) {
    	console.log('paging (prev)', event, data);
    });

    $rootScope.$on('epubReaderSetLocation', function (event, data) {
    	console.log('set location', event, data);
    });

    $rootScope.$on('epubReaderTextSelected', function (event, data) {
    	console.log('text selected', event, data);
    });

    $rootScope.$on('epubReaderHighlightSave', function (event, data) {
    	console.log('highlight save requested', event, data);
    });


    $rootScope.$on('epubReaderHighlightDelete', function (event, data) {
    	console.log('highlight delete requested', event, data);
    });

    $rootScope.$on('epubReaderAnnotationSave', function (event, data) {
	// note: delete of annotation comes as a new save of an annotation, with no annotation text.
    	console.log('annotation save requested', event, data);
    });

    // need deleted event and edited event.
    
})

.run(function($ionicPlatform, $rootScope) {

    // $rootScope.platform = 'android';

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.

	// the stock ionic app does this:
       StatusBar.styleDefault();

      // we're going to do this, as the reader is full screen and we don't want the status bar over-lapping our reader.
      // if you are integrating the reader into another app, you will likely want to defer this call until you are ready to display the reader.
	// actually I set <preference name="StatusBarOverlaysWebView" value="false" /> in config.xml, it seems to do better than the below, which leaves some visual junk on the screen.
      // StatusBar.hide();

    }
  });
})
