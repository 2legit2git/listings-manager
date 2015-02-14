'use strict';

angular.module('listingManagerApp')
  .controller('ManageEditCtrl', function ($scope, $state, myItem) {

    $scope.item = myItem;

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
