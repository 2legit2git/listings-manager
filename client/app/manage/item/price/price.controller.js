'use strict';

angular.module('listingManagerApp')
  .controller('ManageItemPriceCtrl', function ($scope, $state, myItem) {

    $scope.item = myItem;


    $scope.newPrice = "15.00";
  });
