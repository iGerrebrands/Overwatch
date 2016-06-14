'use strict';

angular
  .module('overwatchApp')
  .service('heroService', function () {
    var hero = null;
    
    this.setHero = function(heroValue){
      hero = heroValue;
    };

    this.getHero = function(){
      return hero;
    };
  });
