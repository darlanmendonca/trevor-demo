/* globals angular */
'use strict';

angular
  .module('demo')
  .directive('stateClass', StateClassDirective);

function StateClassDirective($state) {
  return {
    link: function(scope, element) {
      let state = $state.current.name.replace(/\./g, '-');
      let className = `state-${state}`;

      element.addClass(className);
    }
  };
}
