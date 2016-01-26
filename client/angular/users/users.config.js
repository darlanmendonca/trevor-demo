/* globals angular */
'use strict';

angular
  .module('demo')
  .config(usersConfig);

function usersConfig($stateProvider) {
  $stateProvider
     .state('admin.users', {
      url: '/users',
      views: {
        'content@admin': {
          templateUrl: 'templates/users-list.template.html',
          controller: 'UsersController',
          controllerAs: 'users',
          resolve: {
            users: UsersFactory => UsersFactory.list(),
            user: ()=> undefined
          }
        }
      }
    })
    .state('admin.users.create', {
      url: '/create',
      views: {
        'content@admin': {
          templateUrl: 'templates/users-form.template.html',
          controller: 'UsersController',
          controllerAs: 'users',
          resolve: {
            users: ()=> undefined,
            user: () => undefined
          }
        }
      }
    })
    .state('admin.users.edit', {
      url: '/edit/:id',
      views: {
        'content@admin': {
          templateUrl: 'templates/users-form.template.html',
          controller: 'UsersController',
          controllerAs: 'users',
          resolve: {
            users: ()=> undefined,
            user: (UsersFactory, $stateParams) => UsersFactory.get($stateParams.id)
          }
        }
      }
    });
}
