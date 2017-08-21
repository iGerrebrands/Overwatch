'use strict';

angular.module('overwatchApp')
  .directive('hero', function (
    api,
    APITYPES,
    heroService
  ) {
    return {
      restrict: 'A',
      templateUrl: 'scripts/heroes/hero/hero.view.html',
      scope: {},
      link: function (scope) {
        scope.hero = heroService.getHero();
        // console.log(scope.heroname)
        // scope.data = {};
        // api.get(APITYPES.PLATFORM.PC, APITYPES.REGION.EU, 'Coolwater-2530', APITYPES.TYPE.HERO, scope.heroname)
        //     .then(function (res) {
        //       scope.data = res.data;
        //       console.log(scope.data);
        //     });
      }
    };
  });
