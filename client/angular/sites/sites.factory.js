/* globals angular */
'use strict';

angular
  .module('demo')
  .factory('SitesFactory', SitesFactory);

function SitesFactory(SitesService) {
  let factory = {};
  let sites = [
    {
      name: 'Marimoon',
      slug: 'marimoon',
      url: 'marimoon.com.br',
      id: '1',
      description: 'Lorem ipsum dolor sit amet',
      keywords: [
        'marimoon',
        'lifestyle',
        'mtv'
      ]
    },
    {
      name: 'All You Need is Rock',
      slug: 'aynirock',
      url: 'aynirock.com.br',
      id: '2',
      keywords: [
        'rock',
        'heavy',
        'metal'
      ]
    },
    {
      name: 'Dra. Ritz',
      slug: 'draritz',
      url: 'draritz.com.br',
      id: '3',
      keywords: []
    },
    {
      name: 'Fernanda Keulla',
      slug: 'fernanda-keulla',
      url: 'fernanda-keulla.com.br',
      id: '4',
      keywords: []
    },
    {
      name: 'Guia da Pele',
      slug: 'guia-da-pele',
      url: 'guiadapele.com.br',
      id: '5',
      keywords: []
    }
  ];

  factory.list = () => SitesService.query().$promise;
  factory.get = (id) => sites.filter(site => site.id === id)[0];

  return factory;
}
