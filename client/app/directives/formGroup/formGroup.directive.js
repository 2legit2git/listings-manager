'use strict';

angular.module('listingManagerApp')
    .directive('formGroup', function() {
        return {
            templateUrl: 'app/directives/formGroup/formGroup.html',
            restrict: 'A',
            replace: true,
            transclude: true,
            require: "^form",

            scope: {
                label: "@" // Gets the string contents of the `label` attribute.
            },

            link: function(scope, element) {
                // The <label> should have a `for` attribute that links it to the input.
                // Get the `id` attribute from the input element
                // and add it to the scope so our template can access it.
                var id = element.find(":input").attr("id");
                scope.for = id;
            }
        };
    });
