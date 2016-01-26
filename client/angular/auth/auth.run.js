/* globals angular */
'use strict';

angular
	.module('demo')
	.run(authRun);

function authRun ($rootScope, AuthFactory, $state) {
	$rootScope
		.$on('$stateChangeStart', function(event, toState) {
			if (toState.name === 'login') {
				return AuthFactory.logout();
			}

			let stateRequireLogin = /^admin/.test(toState.name);
      let isAuthenticated = AuthFactory.isAuthenticated();
			// let user = AuthFactory.currentUser();
			// let isAdminActive = user;// && user.permission === 'admin' && user.active;

			if (stateRequireLogin && !isAuthenticated) {
				event.preventDefault();
				$state.go('login');
			}
		});
}
