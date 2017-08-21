'use strict';

angular.module('overwatchApp')
  .directive('home', function (
    CARDS
  ) {
    return {
      restrict: 'A',
      templateUrl: 'scripts/main/home.view.html',
      scope: {},
      link: function (scope) {
        scope.cards = CARDS.CARDS;
      }
    };
  });
