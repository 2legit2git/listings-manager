'use strict';

angular.module('listingManagerApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('manage', {
        url: '/manage',
        templateUrl: 'app/manage/manage.html',
        controller: 'ManageCtrl',
        resolve: {
          listings: function(Listings) {
            return Listings.query().$promise;
          }
        },
        data: {
          authenticate: true
        }
      });
  });
