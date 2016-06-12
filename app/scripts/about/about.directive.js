'use strict';

angular.module('overwatchApp')
  .directive('about', function () {
    return {
      restrict: 'A',
      templateUrl: 'scripts/about/about.view.html',
      scope: {},
      link: function (scope) {

      }
    };
  });
