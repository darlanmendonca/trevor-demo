/* globals angular */
'use strict';

angular
  .module('demo')
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
