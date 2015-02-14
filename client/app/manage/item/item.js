'use strict';

angular.module('listingManagerApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('manage.item', {
        // make default id ManageItemCtrl
        url: '/:id',
        templateUrl: 'app/manage/item/item.html',
        controller: 'ManageItemCtrl',
        resolve: {
          myItem: function($stateParams, listings) {
            return _.find(listings, {
              itemID: $stateParams.id
            });
          }
        }
      });
  });
