/* globals angular */
'use strict';

angular
	.module('trevor-demo')
	.config(sitesConfig);

function sitesConfig($stateProvider) {
	$stateProvider
    .state('admin.home', {
      url: '/',
      redirectTo: 'admin.sites'
    })
		.state('admin.sites', {
			url: '/sites',
      views: {
        'content@admin': {
          templateUrl: 'templates/sites-list.template.html',
          controller: 'SitesController',
          controllerAs: 'sites',
          resolve: {
            sites: SitesFactory => SitesFactory.list(),
            site: ()=> undefined
          }
        }
      }
		})
    .state('admin.sites.create', {
      url: '/create',
      views: {
        'content@admin': {
          templateUrl: 'templates/sites-form.template.html',
          controller: 'SitesController',
          controllerAs: 'sites',
          resolve: {
            sites: ()=> undefined,
            site: () => undefined
          }
        }
      }
    })
    .state('admin.sites.edit', {
      url: '/edit/:id',
      views: {
        'content@admin': {
          templateUrl: 'templates/sites-form.template.html',
          controller: 'SitesController',
          controllerAs: 'sites',
          resolve: {
            sites: ()=> undefined,
            site: (SitesFactory, $stateParams) => SitesFactory.get($stateParams.id)
          }
        }
      }
    });
}
