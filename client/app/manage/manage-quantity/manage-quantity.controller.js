'use strict';

angular.module('listingManagerApp')
  .controller('ManageQuantityCtrl', function ($scope, $state, myItem) {

    // this should at first be set to the current quantity or null.
    // disabled if 0. there should be a button for sending stock out.

    $scope.item = myItem;

    $scope.newQuantity = 50;

    $scope.submit = function() {
      alert("the quantity is " + $scope.newQuantity + "!");
    };

    $scope.stockOut = function() {
      alert("the stock is out");
    };

  });
