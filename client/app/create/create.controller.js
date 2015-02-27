'use strict';

angular.module('listingManagerApp')
  .controller('CreateCtrl', function ($scope) {

    $scope.debug = false;
    $scope.message = 'Hello';
    $scope.checked = true;

    $scope.item = {"title": "NEW VTech Communications Safe and Sound Digital Audio Monitor FREE SHIPPING", "weightMajor": 1, "weightMinor": 15};
    $scope.conditionModel = "New";
    $scope.listingTypeModel = "fixed";
    $scope.listingDurationModel = "GTC";
    //$filter('limitTo')($scope.item.title, 80, 0);
  });
