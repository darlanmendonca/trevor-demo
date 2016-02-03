/* globals angular */
'use strict';

angular
  .module('trevor-demo')
  .config(translateConfig);

function translateConfig($translateProvider, TranslateProvider) {
  $translateProvider.useSanitizeValueStrategy('escape');

  TranslateProvider = TranslateProvider.$get();

  for (let locale in TranslateProvider) {
    let data = TranslateProvider[locale];
    $translateProvider.translations(locale, data);
  }

  let defaultLocale = Object.keys(TranslateProvider)[0];
  $translateProvider.use(defaultLocale);
}
