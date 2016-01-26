/* globals angular */
'use strict';

angular
  .module('demo')
  .directive('translateButton', TranslateDirective);

function TranslateDirective($translate) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      let locale = attrs.translateButton;
      element.on('click', function() {
        $translate.use(locale);
      });
    }
  };
}
