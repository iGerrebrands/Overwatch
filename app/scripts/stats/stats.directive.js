'use strict';

angular.module('overwatchApp')
  .directive('stats', function () {
    return {
      restrict: 'A',
      templateUrl: 'scripts/stats/stats.view.html',
      scope: {},
      link: function (scope) {

      }
    };
  });
