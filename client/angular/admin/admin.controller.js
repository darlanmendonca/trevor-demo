/* globals angular */
'use strict';

angular
  .module('trevor-demo')
  .controller('AdminController', AdminController);

function AdminController(TranslateFactory) {
  this.locales = TranslateFactory.locales;
}
