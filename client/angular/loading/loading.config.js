/* globals angular */
'use strict';

angular
  .module('trevor-demo')
  .config(loadingConfig);

function loadingConfig(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
  cfpLoadingBarProvider.includeBar = true;
}
