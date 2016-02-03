/* globals angular */
'use strict';

angular
  .module('trevor-demo')
  .run(adminRun);

function adminRun($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', setRedirects);

  function setRedirects(event, stateTo, params) {
    if (stateTo.redirectTo) {
      event.preventDefault();
      $state.go(stateTo.redirectTo, params);
    }
  }
}
