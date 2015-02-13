'use strict';

angular.module('listingManagerApp')
  .controller('ManagePriceCtrl', function ($scope, $state, myItem) {

    $scope.item = myItem;


    $scope.newPrice = "15.00";
  });
