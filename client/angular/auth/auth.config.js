/* globals angular */
'use strict';

angular
  .module('demo')
  .config(authConfig);

function authConfig($authProvider, API) {
	$authProvider.loginUrl = `${API}/auth`;
	$authProvider.authHeader = 'token';
	$authProvider.authToken = '';
	$authProvider.storageType = 'localStorage';
}
