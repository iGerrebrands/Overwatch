'use strict';

angular.module('overwatchApp')
  .directive('card', function () {
    return {
      restrict: 'A',
      templateUrl: 'scripts/main/card/card.view.html',
      scope: { data: '=' },
      link: function (scope) { }
    };
  });
