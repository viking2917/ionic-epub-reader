// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('readerDemo', ['ionic', 'epubreader', 'readerDemo.controllers',])


.run(function($ionicPlatform) {

    // $rootScope.platform = 'android';
    
    $ionicPlatform.ready(function() {
	// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	// for form inputs).
	// The reason we default this to hidden is that native apps don't usually show an accessory bar, at
	// least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
	// useful especially with forms, though we would prefer giving the user a little more room
	// to interact with the app.
      
  if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
	    cordova.plugins.Keyboard.hideFormAccessoryBar(true);
	    cordova.plugins.Keyboard.disableScroll(true);
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

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {


  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

    .state('tab.reader', {
	url: '/dash', 
	params: {epubUrl: false, highlightArray: false, bookmarkArray: false},
	views: {
	    'tab-dash': {
		templateUrl: 'templates/tab-reader.html',
		controller: 'ReaderCtrl'
	    }
	}
    })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');


    // android pulls titles to the left. This makes our note modal look very wonky. This centers it. 
    $ionicConfigProvider.navBar.alignTitle('center');
});
