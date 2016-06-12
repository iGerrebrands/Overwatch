'use strict';

angular.module('overwatchApp')
  .directive('heroes', function () {
    return {
      restrict: 'A',
      templateUrl: 'scripts/heroes/heroes.view.html',
      scope: {},
      link: function (scope) {

      }
    };
  });
