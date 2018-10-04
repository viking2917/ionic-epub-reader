angular.module('readerDemo.controllers', [])

.controller('ReaderCtrl', function($scope, $rootScope, $ionicTabsDelegate, $state) {

    // ionic.Platform.fullScreen();
    // if (window.StatusBar) {
    // 	return StatusBar.hide();
    // }

    $scope.params = {};
    $scope.params.highlightArray = ('highlightArray' in $state.params) ? $state.params.highlightArray : false;
    $scope.params.bookmarkArray = ('bookmarkArray' in $state.params) ? $state.params.bookmarkArray : false;
    $scope.params.epubUrl = ('epubUrl' in $state.params) ? $state.params.epubUrl : "";

    $ionicTabsDelegate.showBar(false);
    
    $rootScope.$on('epubReaderBookmarkSave', function (event, data) {
    	console.log('READER_EVENT: bookmark save', event, JSON.stringify(data.bookmark));
    });
    
    $rootScope.$on('epubReaderBookmarkDelete', function (event, data) {
    	console.log('READER_EVENT: bookmark save', event, JSON.stringify(data.bookmark));
    });
    
    $rootScope.$on('epubReaderSaveSettings', function (event, data) {
    	console.log('READER_EVENT: save settings requested', event, JSON.parse(data.settings));
    });
    
    $rootScope.$on('epubReaderCurrentLocation', function (event, data) {
    	console.log('READER_EVENT: current position set', event, data.position);
    });
    
    $rootScope.$on('epubReaderNextPage', function (event, data) {
    	console.log('READER_EVENT: paging (next)', event, data);
    });
    
    $rootScope.$on('epubReaderPrevPage', function (event, data) {
    	console.log('READER_EVENT: paging (prev)', event, data);
    });
    
    $rootScope.$on('epubReaderSetLocation', function (event, data) {
    	console.log('READER_EVENT: set location', event, data);
    });
    
    $rootScope.$on('epubReaderTextSelected', function (event, data) {
    	console.log('READER_EVENT: text selected', event, data);
    });
    
    $rootScope.$on('epubReaderHighlightSave', function (event, data) {
    	console.log('READER_EVENT: highlight save requested', event, data);
    });
    
    
    $rootScope.$on('epubReaderHighlightDelete', function (event, data) {
    	console.log('READER_EVENT: highlight delete requested', event, data);
    });
    
    $rootScope.$on('epubReaderAnnotationSave', function (event, data) {
	// note: delete of annotation comes as a new save of an annotation, with no annotation text.
    	console.log('READER_EVENT: annotation save requested', event, data);
    });
    
    $rootScope.$on('epubReaderAnnotationDelete', function (event, data) {
	// note: delete of annotation comes as a new save of an annotation, with no annotation text.
    	console.log('READER_EVENT: annotation delete requested', event, data);
    })

})
    
.controller('DashCtrl', function($scope, $state) {

    $scope.doTreasureIsland = function (includeAnnotations) {
	if(!includeAnnotations) {
	    console.log("    state.go('tab.reader');    ");
	    $state.go('tab.reader', {epubUrl: 'https://standardebooks.org/ebooks/robert-louis-stevenson/treasure-island/milo-winter/dist/robert-louis-stevenson_treasure-island.epub'} );
	}
	else {
	    let hls = [{cfi: "epubcfi(/6/14[chapter-1.xhtml]!/4/2[part-1]/2[chapter-1]/8/2,/2/1:1,/6/1:29)"},
		       {cfi: "epubcfi(/6/14[chapter-1.xhtml]!/4/2[part-1]/2[chapter-1]/28,/1:469,/1:585)"}, 
		       {cfi: "epubcfi(/6/18[chapter-3.xhtml]!/4/2[part-1]/2[chapter-3]/2/4,/1:0,/1:14)",
			annotationText: "This is an example note. Stevenson made up the idea of the Black Spot - not a real pirate thing..."}];
	    let bms = [{cfi: "epubcfi(/6/14[chapter-1.xhtml]!/4/2[part-1]/2[chapter-1]/38/4/2/1:0)"}, 
		       {cfi: "epubcfi(/6/16[chapter-2.xhtml]!/4/2[part-1]/2[chapter-2]/30/1:0)"}];
	    
	    console.log("    state.go('tab.reader');    ");
	    $state.go('tab.reader', 
		      { epubUrl: 'https://standardebooks.org/ebooks/robert-louis-stevenson/treasure-island/milo-winter/dist/robert-louis-stevenson_treasure-island.epub', 
			highlightArray: hls, 
			bookmarkArray: bms} );
	};
    }

})
    
.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    
    // delete this for the sample app
    // $scope.chats = Chats.all();
    // $scope.remove = function(chat) {
    // 	Chats.remove(chat);
    // };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    // $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
	enableFriends: true
    };
});

