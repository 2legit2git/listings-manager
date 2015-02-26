'use strict';

angular.module('listingManagerApp')
  .controller('ManageItemEditCtrl', function($scope, $state, myItem) {

    $scope.item = myItem.items[0];

    
    
    // $scope.ddata = {
    //   someString: "",
    //   trustedVersion: ""
    // };
    // $scope.$watch("ddata.someString", function(newVal) {
    //   debugger;
    //   $scope.ddata.trustedVersion = $sce.trustAsHtml(newVal);
    // }, true);

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
