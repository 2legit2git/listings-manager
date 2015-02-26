'use strict';

angular.module('listingManagerApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('manage.item.stats', {
        // make default id
        url: '/stats',
        templateUrl: 'app/manage/item/stats/stats.html',
        controller: 'ManageItemStatsCtrl',
      });
  });
