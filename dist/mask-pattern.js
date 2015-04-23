(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'angular'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('angular'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.angular);
    global.maskPattern = mod.exports;
  }
})(this, function (exports, module, _angular) {
  'use strict';

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

  var _angular2 = _interopRequire(_angular);

  var ng = _angular2;

  _angular2.module('sb.maskPattern', []).directive('sbMaskPattern', function () {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function postLink(scope, element, attr, ngModel) {
        if (!ngModel && (!!attr.pattern || !!attr.ngPattern)) {
          return;
        }var regexp,
            patternExp = attr.ngPattern || attr.pattern;
        attr.$observe('pattern', function (regex) {
          if (ng.isString(regex) && regex.length > 0) {
            regex = new RegExp('^' + regex + '$');
          }
          regexp = regex || undefined;
        });

        function parse(viewValue) {
          if (!!regexp && viewValue.length) {
            if (!regexp.test(viewValue)) {
              var currentValue = ngModel.$modelValue;
              ngModel.$setViewValue(currentValue);
              ngModel.$render();
              return currentValue;
            }
          }
          return viewValue;
        }
        ngModel.$parsers.unshift(parse);
      }
    };
  });

  module.exports = _angular2.module('sb.maskPattern');
});