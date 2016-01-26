/* globals angular */
'use strict';

angular
  .module('demo')
  .config(loadingConfig);

function loadingConfig(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
  cfpLoadingBarProvider.includeBar = true;
}
