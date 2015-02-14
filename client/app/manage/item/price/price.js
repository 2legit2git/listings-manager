'use strict';

angular.module('listingManagerApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('manage.item.price', {
        // make default id
        url: '/price',
        templateUrl: 'app/manage/item/price/price.html',
        controller: 'ManageItemPriceCtrl',
      });
  });
