'use strict';

angular.module('listingManagerApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('manage.item.pics', {
        // make default id
        url: '/pics',
        templateUrl: 'app/manage/item/pics/pics.html',
        controller: 'ManageItemPicsCtrl',
      });
  });
