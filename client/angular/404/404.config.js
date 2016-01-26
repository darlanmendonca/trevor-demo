/* globals angular */
'use strict';

angular
  .module('demo')
  .config(pageNotFoundConfig);

function pageNotFoundConfig($stateProvider) {
  $stateProvider
    .state('404', {
      url: '/404',
      views: {
        '': {
          templateUrl: 'templates/404.template.html'
        }
      }
    });
}
