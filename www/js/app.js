// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('readerDemo', ['ionic', 'epubreader'])

.controller('ReaderCtrl', function($scope, $rootScope, $ionicActionSheet, $ionicPopover) {
	
    $rootScope.$on('epubReaderSaveSettings', function (event, data) {
    	console.log('save settings requested', event, JSON.parse(data.settings));
    });

    $rootScope.$on('epubReaderSaveLocation', function (event, data) {
    	console.log('save position requested', event, data.position);
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

    $rootScope.$on('epubReaderHighlightSaveRequested', function (event, data) {
    	console.log('highlight save requested', event, data);
    });

    $rootScope.$on('epubReaderHighlightDeleteRequested', function (event, data) {
    	console.log('highlight save requested', event, data);
    });


    
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
      StatusBar.styleDefault();
    }
  });
})
