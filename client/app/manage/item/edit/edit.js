'use strict';

angular.module('listingManagerApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('manage.item.edit', {
        // make default id
        url: '/edit',
        templateUrl: 'app/manage/item/edit/edit.html',
        controller: 'ManageItemEditCtrl',
      });
  });
