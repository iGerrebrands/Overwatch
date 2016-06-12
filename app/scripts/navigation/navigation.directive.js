'use strict';

angular.module('overwatchApp')
  .directive('navigation', function (
    NAVIGATION
  ) {
    return {
      restrict: 'A',
      templateUrl: 'scripts/navigation/navigation.view.html',
      scope: {},
      link: function (scope) {
        scope.menuItems = NAVIGATION.ITEMS;
      }
    };
  });
