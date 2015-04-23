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

  _angular2.module('sjb.mask-input', []).directive('sjbMaskInput', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function postLink(scope, elements, attrs, modelCtrl) {

        debugger;
      }
    };
  });

  module.exports = _angular2.module('sjb.maskInput');
});