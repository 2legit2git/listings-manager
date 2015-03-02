'use strict';

angular.module('listingManagerApp')
  .directive('myMaxLength', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.text('this is the myMaxLength directive');
      }
    };
  });