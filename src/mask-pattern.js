'use strict';

import angular from 'angular';
var ng = angular;

angular.module('sb.maskPattern', [])
.directive('sbMaskPattern', function () {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: function postLink (scope, element, attr, ngModel) {

      if (!ngModel && (!!attr.pattern || !!attr.ngPattern)) return;

      var regexp, patternExp = attr.ngPattern || attr.pattern;

      attr.$observe('pattern', function (regex) {
        if (ng.isString(regex) && regex.length > 0) {
          regex = new RegExp('^' + regex + '$');
        }
        regexp = regex || undefined;
      });
      /**
       * Parse the view values from input.
       * @param  {string} viewValue value to parse.
       * @return {string}
       */
      function parse (viewValue) {
        if (!!regexp && viewValue.length) {
          if (!regexp.test(viewValue)) {
            var currentValue = ngModel.$modelValue;
            ngModel.$setViewValue(currentValue);
            ngModel.$render();
            return currentValue;
          } else {
            return viewValue;
          }
        }
        return viewValue;
      }
      ngModel.$parsers.unshift(parse);
    }
  };
});


export default angular.module('sb.maskPattern');
