'use strict';

angular.module('listingManagerApp')
  .controller('ManageItemStatsCtrl', function ($scope, $state, myItem) {

    $scope.item = myItem.items[0];

    $scope.master = {};

      $scope.update = function(selection) {
        $scope.master = angular.copy(selection);
      };

      $scope.reset = function() {
        $scope.selection = $scope.master;
      };

      $scope.reset();

    //$scope.newPrice = "15.00";

    //$scope.mySelections = [];


  });
