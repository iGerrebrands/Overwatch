'use strict';

angular
  .module('overwatchApp')
  .constant('APITYPES', {
    PLATFORM: {
      PC: 'pc',
      PS: 'psn',
      XBOX: 'xbl'
    },
    REGION: {
      EU: 'eu',
      US: 'us'
    },
    TYPE: {
      ACHIEVEMENTS: 'achievements',
      ALLHEROES: 'allHeroes',
      GETPLATFORMS: 'get-platforms',
      HERO: 'hero',
      HEROES: 'heroes',
      PROFILE: 'profile'
    }
  });
