/* globals angular */
'use strict';

angular
  .module('demo')
  .factory('UsersFactory', UsersFactory);

function UsersFactory(UsersService) {
  let factory = {};
  let users = [
    {
      firstname: 'Darlan',
      lastname: 'Mendonça',
      email: 'darlanmendonca@mediaresponse.com',
      id: '1'
    },
    {
      firstname: 'Thiago',
      lastname: 'Zilli',
      email: 'zilli@mediaresponse.com',
      id: '2'
    },
    {
      firstname: 'Rafael',
      lastname: 'Stockler',
      email: 'rafael@mediaresponse.com',
      id: '3'
    },
    {
      firstname: 'Marcos',
      lastname: 'Bergamo',
      email: 'bergamo@mediaresponse.com',
      id: '4'
    }
  ];

  factory.list = () => UsersService.query().$promise;
  factory.get = (id) => users.filter(user => user.id === id)[0];

  return factory;
}
