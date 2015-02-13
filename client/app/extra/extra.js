'use strict';

angular.module('listingManagerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('extra', {
        url: '/extra',
        templateUrl: 'app/extra/extra.html',
        controller: 'ExtraCtrl'
      });
  });