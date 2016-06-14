'use strict';

angular
  .module('overwatchApp')
  .service('api', function (
    $http,
    CONFIG
  ) {
    this.get = function (type, platform, regio, player, hero) {
      // TODO: EDIT URL
      return $http({
        method: 'GET',
        url: hero === null || typeof hero === 'undefined' ? CONFIG.API.path + '/' + platform + '/' + type : CONFIG.API.path + '/' + platform + '/' + type + '/' + hero
      });
    };
  });
