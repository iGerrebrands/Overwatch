'use strict';

angular
  .module('overwatchApp')
  .constant('CARDS', {
      CARDS: [
        {
          title: 'Heroes',
          link: 'heroes',
          image: 'images/heroes.jpg'
        },
        {
          title: 'Stats',
          link: 'stats',
          image: 'images/stats.png'
        },
        {
          title: 'Compare',
          link: 'compare',
          image: 'images/versus.jpg'
        },
        {
          title: 'Contact Us',
          link: 'contact',
          image: 'images/contact.jpg'
        }
      ]
  });
