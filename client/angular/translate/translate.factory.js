/* globals angular */
'use strict';

angular
  .module('trevor-demo')
  .factory('TranslateFactory', TranslateFactory);

function TranslateFactory() {
  let factory = {};

  factory.locales = {
    'en': 'English',
    'es': 'Español',
    'pt': 'Português'
  };

  return factory;
}
