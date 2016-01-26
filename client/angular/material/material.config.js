/* globals angular */
'use strict';

angular
  .module('demo')
  .config(materialConfig);

function materialConfig ($mdThemingProvider) {
	$mdThemingProvider.theme('default')
    .primaryPalette('deep-orange')
    .accentPalette('green')
    .warnPalette('red');
}
