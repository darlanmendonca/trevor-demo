/* globals angular */
'use strict';

angular
  .module('demo')
  .factory('UsersService', UsersService);

function UsersService($resource, API) {
  return $resource(`${API}/users`);
}

