'use strict';

angular.module('listingManagerApp')
  .controller('ManageItemQuantityCtrl', function ($scope, $state, myItem, $http) {

    // this should at first be set to the current quantity or null.
    // disabled if 0. there should be a button for sending stock out.

    $scope.item = myItem.items[0];

    $scope.newQuantity = parseInt($scope.item.quantityAvailable);

     $scope.setQuantity = function() {
      $http.post('http://replaceyourdomain.com/siliconehose/editQuantity.php', {
        itemID: $scope.item.itemID,
        quantity: $scope.newQuantity
      }).
      success(function(data, status, header, config) {
        console.log('y');
        console.log(JSON.stringify(data));
        
        if (data.response) {

          if (data.response.Ack) {
            console.log(data.response.Ack);
          }

          if (data.response.Errors) {
            console.log(data.response.Errors.ErrorCode);
          }
          
        }
        $scope.checked = !$scope.checked;
      }).
      error(function(data, status, headers, config) {
        console.log('n');
        console.log(JSON.stringify(data));
      });
    }

     

    // $scope.submit = function() {
    //   alert("the quantity is " + $scope.newQuantity + "!");
    // };

    $scope.stockOut = function() {
      alert("the stock is out");
    };

  });
