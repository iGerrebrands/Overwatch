'use strict';

angular.module('overwatchApp')
  .directive('heroes', function (
    api,
    APITYPES
  ) {
    return {
      restrict: 'A',
      templateUrl: 'scripts/heroes/heroes.view.html',
      scope: {},
      link: function (scope) {
        api.get(APITYPES.PLATFORM.PC, APITYPES.REGION.EU, 'Coolwater-2530', APITYPES.TYPE.HEROES)
            .then(function (res) {
              console.log(res);
            });
      }
    };
  });
