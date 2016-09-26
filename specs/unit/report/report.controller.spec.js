//const reportPath = '/../../resources/report.json';

describe('ReportController function', function() {
    let scope, ReportController, httpBackend, logRequestHandler;
    let url = '/report';

    beforeEach(module('uploadApp'));

    beforeEach( inject(function($httpBackend, $rootScope, $controller, $http) {
        scope =  $rootScope.$new();
        
        httpBackend = $httpBackend;
        httpBackend.when('GET', '/report').respond('Report from flat file.');

        ReportController = $controller('ReportController', {
            $scope:scope,
            $http:$http
        });
    }));

    afterEach(function() {
    	httpBackend.verifyNoOutstandingExpectation();
    	httpBackend.verifyNoOutstandingRequest();
   	});

    it('should get report from flat file', function() {
        httpBackend.flush();
        expect(scope.content).toEqual('Report from flat file.');
    });

});