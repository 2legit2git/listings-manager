'use strict';

angular.module('listingManagerApp')
    .controller('ManageItemCtrl', function($scope, $state, $stateParams, $http, myItem) {

//$scope.items = [];
//

$scope.item = myItem.items[0];
//alert(JSON.stringify(myItem.items[0]));


        // $http({
        //     url: "http://replaceyourdomain.com/siliconehose/functions/jsonTest6.php",
        //     method: "GET",
        //     params:  {
        //     itemID: $stateParams.id
        // }
        // }).success(function(data, status, headers, config) {
        //     $scope.items = data;
        //    // alert(JSON.stringify($scope.items[0]));
        //     $scope.item = $scope.items[0];
        //     console.log(JSON.stringify($scope.item));
        //     // if ($scope.totalServerItems < ($scope.pagingOptions.currentPage * data.items.length)) {

        //     //   alert('w');
        //     //   $scope.pagingOptions.currentPage = 1;
        //     // }

        //     //console.log(JSON.stringify(url));
        // }).error(function(data, status, headers, config) {
        //     alert(JSON.stringify(data));
        // });



//$scope.item = $scope.items[0];
//alert($scope.item);
//$scope.newPrice = "15.00";

//$scope.mySelections = [];


});
