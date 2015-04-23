describe('maskinput', () => {
  var el, input, form, $compile, $scope, run, template;
  beforeEach(module('sb.maskPattern'));
  beforeEach(inject(($injector) => {
    $scope = $injector.get('$rootScope').$new();
    $compile = $injector.get('$compile');
    template = () => {
      input = `<input ng-model="name" name="example" sb-mask-pattern pattern="[a-zA-Z0-9]+" ng-trim="false">`;
      form = `<form name="test">${input}</form>`;
    };
    template();
    run = function (tpl = form) {
      el = angular.element(tpl);
      el = $compile(el)($scope);
      input =  el.find('input');
      $scope.$apply();
    };
  }));

  it('will change the value on digest cycle', () => {
    run();
    input.val('works').triggerHandler('input');
    expect($scope.name).to.be.equal('works');
    expect(input.val()).to.be.equal('works');
    input.val(`doesn't work`).triggerHandler('input');
    expect($scope.name).to.be.equal('works');
    expect(input.val()).to.be.equal('works');
  });

  it('will handle ngPattern ', () => {
    input.replace('pattern="[a-zA-Z0-9]+"', 'ng-pattern="testPattern"');

    template();
    run();

    $scope.testPattern = 'cats';
    input.val('cats').triggerHandler('input');
    expect($scope.name).to.be.equal('cats');
    expect(input.val()).to.be.equal('cats');
    input.val('dogs').triggerHandler('input');
    expect($scope.name).to.be.equal('cats');
    expect(input.val()).to.be.equal('cats');
  });

});
