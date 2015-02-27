'use strict';

angular.module('listingManagerApp')
  .controller('ManageItemEndCtrl', function($scope, $state, myItem, $http) {

      //Need to figure out how to (done -get returned data and display to user), 
      //update the model, and update the database.
    $scope.item = myItem.items[0];

    $scope.endItem = function() {
      $http.post('http://nxs.us.to/siliconehose/endItemTest.php', {
        itemID: $scope.item.itemID
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

    $scope.getItems = function() {
      $http.get('http://nxs.us.to/siliconehose/functions/jsonTest.php').
      success(function(data, status, header, config) {
        console.log('y');
        console.log(JSON.stringify(data));
      }).
      error(function(data, status, headers, config) {
        console.log('n');
        console.log(JSON.stringify(data));
      });
    }



  });
