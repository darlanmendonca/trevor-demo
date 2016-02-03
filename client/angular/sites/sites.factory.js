/* globals angular */
'use strict';

angular
  .module('trevor-demo')
  .factory('SitesFactory', SitesFactory);

function SitesFactory(SitesService) {
  let factory = {};
  let sites = [
    {
      name: 'GTA V',
      slug: 'v',
      url: 'gtav.com',
      id: '1',
      description: `Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum.`, /* jshint ignore:line */
      keywords: [
        'trevor',
        'michael',
        'franklyn'
      ]
    },
    {
      name: 'GTA San Andreas',
      slug: 'sanandreas',
      url: 'gtasanandreas.com.br',
      id: '2',
      description: 'Lorem ipsum dolor sit amet',
      keywords: [
        'cj',
        'big smoke'
      ]
    },
    {
      name: 'GTA Vice City',
      slug: 'vicecity',
      url: 'gtavicecity.com',
      id: '3',
      description: 'Lorem ipsum dolor sit amet',
      keywords: [
        'beach'
      ]
    },
    {
      name: 'GTA III',
      slug: 'iii',
      url: 'gtaiii.com',
      id: '4',
      description: 'Lorem ipsum dolor sit amet',
      keywords: [
        'jail',
        'los santos'
      ]
    },
    {
      name: 'Grand Theft Auto',
      slug: 'gta',
      url: 'gta.com',
      id: '5',
      description: 'Lorem ipsum dolor sit amet',
      keywords: [
        'classic'
      ]
    }
  ];

  factory.list = () => SitesService.query().$promise;
  factory.get = (id) => sites.filter(site => site.id === id)[0];

  return factory;
}
