'use strict';

angular.module('listingManagerApp')
  .controller('ManageItemPriceCtrl', function ($scope, $state, myItem) {

    $scope.item = myItem.items[0];

    $scope.newPrice = $scope.item.buyItNowPrice;

    
  });
