/* globals angular */
'use strict';

angular
  .module('trevor-demo')
  .factory('SitesService', SitesService);

function SitesService($resource, API) {
  return $resource(`${API}/sites`);
}

