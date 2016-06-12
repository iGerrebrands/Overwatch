'use strict';

angular
  .module('overwatchApp')
    .constant('NAVIGATION', {
      ITEMS: [
        {
          title: 'Home',
          link: 'home'
        },
        {
          title: 'Heroes',
          link: 'heroes'
        },
        {
          title: 'Stats',
          link: 'stats'
        },
        {
          title: 'Compare',
          link: 'compare'
        },
        {
          title: 'Contact Us',
          link: 'contact'
        }
      ]
});
