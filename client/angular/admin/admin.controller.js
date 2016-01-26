/* globals angular */
'use strict';

angular
  .module('demo')
  .controller('AdminController', AdminController);

function AdminController(TranslateFactory) {
  this.locales = TranslateFactory.locales;
}
