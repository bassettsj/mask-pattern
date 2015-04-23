import angular from 'angular';


angular.module('sb.maskPattern', [])
.directive('sbMaskPattern', function () {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function postLink (scope, element, attrs, modelCtrl) {
      attrs.$addClass('sb-mask-pattern');
    }
  };
});


export default angular.module('sb.maskPattern');
