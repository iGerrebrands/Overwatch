'use strict';

angular
  .module('overwatchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        template: '<div home></div>'
      })
      .when('/heroes', {
        template: '<div heroes></div>'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
