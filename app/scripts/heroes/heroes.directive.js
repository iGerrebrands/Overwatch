'use strict';

angular.module('overwatchApp')
  .directive('heroes', function (
    api,
    APITYPES,
    heroService,
    $location
  ) {
    return {
      restrict: 'A',
      templateUrl: 'scripts/heroes/heroes.view.html',
      scope: {},
      link: function (scope) {
        scope.data = {};
        // scope.heroname = "";
        scope.heroClick = function(hero){
          // scope.heroname = hero.name;
          api.get(APITYPES.PLATFORM.PC, APITYPES.REGION.EU, 'Coolwater-2530', APITYPES.TYPE.HERO, hero.name)
              .then(function (res) {
                heroService.setHero(res.data);
                $location.path('/heroes/hero');
              });
        }
        api.get(APITYPES.PLATFORM.PC, APITYPES.REGION.EU, 'Coolwater-2530', APITYPES.TYPE.HEROES)
            .then(function (res) {
              scope.data = res.data;
              console.log(scope.data);
            });
      }
    };
  });
