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
      .when('/stats', {
        template: '<div stats></div>'
      })
      .when('/compare', {
        template: '<div compare></div>'
      })
      .when('/contact', {
        template: '<div contact></div>'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
