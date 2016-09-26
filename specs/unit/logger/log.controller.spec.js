describe('LogController function', function() {
    let scope, LogController, httpBackend, logRequestHandler;
    let url = '/log';

    beforeEach(module('uploadApp'));

    beforeEach( inject(function($httpBackend, $rootScope, $controller, $http) {
        scope =  $rootScope.$new();

        LogController = $controller('LogController', {
            $scope:scope,
            $http:$http
        });        
        
        httpBackend = $httpBackend;
        httpBackend.when('GET', '/log').respond('Log of flat file.');
    }));

    afterEach(function() {
    	httpBackend.verifyNoOutstandingExpectation();
    	httpBackend.verifyNoOutstandingRequest();
   	});

    it('should get message log', function() {
        httpBackend.flush();
        expect(scope.content).toEqual('Log of flat file.');
    });

});