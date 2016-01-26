/* globals angular */
'use strict';

angular
  .module('demo')
  .config(adminConfig);

function adminConfig($locationProvider, $urlRouterProvider, $stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/404');

  $stateProvider
    .state('admin', {
      abstract: true,
      views: {
        '': {
          templateUrl: 'templates/admin.template.html',
          controller: 'AdminController',
          controllerAs: 'admin'
        }
      }
    });
}
