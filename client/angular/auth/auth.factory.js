/* globals angular */
'use strict';

angular
  .module('trevor-demo')
  .factory('AuthFactory', AuthFactory);

function AuthFactory($auth) {
	let factory = {
		login: user => $auth.login(user),
		logout: ()=> $auth.logout(),
		isAuthenticated: ()=> $auth.isAuthenticated(),
		currentUser: ()=> $auth.getPayload()
	};
	return factory;
}
