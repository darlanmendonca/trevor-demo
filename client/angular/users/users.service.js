/* globals angular */
'use strict';

angular
  .module('trevor-demo')
  .factory('UsersService', UsersService);

function UsersService($resource, API) {
  return $resource(`${API}/users`);
}

