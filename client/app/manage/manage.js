'use strict';

angular.module('listingManagerApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('manage', {
        url: '/manage',
        templateUrl: 'app/manage/manage.html',
        controller: 'ManageCtrl',
        resolve: {
          listings: function(Listings) {
            return Listings.query().$promise;
          }
        },
        data: {
          authenticate: true
        }
      })
      .state('manage.item', {
        // make default id ManageItemCtrl
        url: '/:id',
        templateUrl: 'app/manage/manage-item/manage-item.html',
        controller: 'ManageItemCtrl',
        resolve: {
          myItem: function($stateParams, listings) {
            return _.find(listings, {
              itemID: $stateParams.id
            });
          }
        }
      })
      .state('manage.item.price', {
        // make default id
        url: '/price',
        templateUrl: 'app/manage/manage-price/manage-price.html',
        controller: 'ManagePriceCtrl',
      })
      .state('manage.item.edit', {
        // make default id
        url: '/edit',
        templateUrl: 'app/manage/manage-edit/manage-edit.html',
        controller: 'ManageEditCtrl',
      })
      .state('manage.item.end', {
        // make default id
        url: '/end',
        templateUrl: 'app/manage/manage-end/manage-end.html',
        controller: 'ManageEndCtrl',
      })
      .state('manage.item.quantity', {
        url: '/quantity',
        templateUrl: 'app/manage/manage-quantity/manage-quantity.html',
        controller: 'ManageQuantityCtrl',
      });
  });
