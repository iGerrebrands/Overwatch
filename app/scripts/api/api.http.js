'use strict';

angular
  .module('overwatchApp')
  .service('api', function (
    $http,
    CONFIG
  ) {
    this.get = function ( platform, regio, tag, type, hero) {
      var heroUrl = hero === null || typeof hero === 'undefined' ? "" : '/' + hero;

      return $http({
        method: 'GET',
        url: CONFIG.API.path + '/' + platform + '/' + regio + '/' + tag + '/' + type + heroUrl
      });
    };
  });
