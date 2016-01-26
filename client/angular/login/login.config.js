/* globals angular */
'use strict';

angular
  .module('demo')
  .config(loginConfig);

function loginConfig($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      views: {
        '': {
          templateUrl: 'templates/login.template.html',
          controller: 'LoginController',
          controllerAs: 'login'
        }
      }
    })
    .state('logout', {
      url: '/logout',
      redirectTo: 'login'
    });
}
