describe('maskinput', () => {
  var el, input, $compile, $scope, run;
  beforeEach(module('sb.maskPattern'));
  beforeEach(inject(($injector) => {
    $scope = $injector.get('$rootScope').$new();
    $compile = $injector.get('$compile');
    input = ` <input ng-model="name" name="example" sb-mask-pattern pattern="[a-zA-Z0-9]+">`;
    var form = `<form name="test">${input}</form>`;
    var template = form;
    run = function (tpl = template) {
      el = angular.element(tpl);
      el = $compile(el)($scope);
      input =  el.find('input');
      $scope.$apply();
    };
  }));

  it('will pass a smoke test', () => {
    run();
    expect(input.hasClass('sb-mask-pattern')).to.be.true;
  });

  it('will change the value on digest cycle', () => {
    run();
    input.val('works').triggerHandler('input');
    expect($scope.name).to.be.equal('works');
    expect(input.val()).to.be.equal('works');
    input.val(`doesn't work`).triggerHandler('input');
    $scope.$apply();
    expect($scope.name).to.be.equal('works');
    expect(input.val()).to.be.equal('works');
  });

});
