/* globals angular */
'use strict';

angular
	.module('trevor-demo')
	.controller('SitesController', SitesController);

function SitesController (sites, site, TranslateFactory) {
  this.list = sites;
  this.site = site;
  this.locales = TranslateFactory.locales;

  let create = ()=> console.log('create', this.user);
  let update = ()=> console.log('update', this.user);

  this.save = !site ? create : update;
}
