/* globals angular */
'use strict';

angular
  .module('trevor-demo')
  .config(materialConfig);

function materialConfig ($mdThemingProvider) {
	$mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('pink')
    .warnPalette('red');
}
