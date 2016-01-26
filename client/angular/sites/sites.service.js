/* globals angular */
'use strict';

angular
  .module('demo')
  .factory('SitesService', SitesService);

function SitesService($resource, API) {
  return $resource(`${API}/sites`);
}

