describe('fileModel function', function() {
    let elm, compile, scope, parse;

    beforeEach(module('uploadApp'));

    beforeEach( inject(function($rootScope, $compile, $parse) {
        compile = $compile;
        scope = $rootScope.$new();
        scope.myFile = 'test.dat';
        parse = $parse;
    }));

     function compileDirective(tpl) {
        if (!tpl) tpl = '<div ng-model="myFile" file-model="myFile"></div></form>';
        tpl = '<form name="form">' + tpl + '</tpl>';

        inject(function($compile) {
            var form = $compile(tpl)(scope);
            elm = form.find('div');
        });
        scope.$digest();
    }

    it('should call fileModel method', function() {
        let tag = '<input name="fileInput" id="input-1" type="file" ng-model="myFile" file-model="myFile"/>';
        compileDirective();
        expect(scope.form.$valid).toBe(true);
    });

});