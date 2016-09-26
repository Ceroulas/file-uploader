
describe('uploadFile.Service', function(){
	let httpBackend, fileRequestHandler, fileUploadObj;
	let f = new File([""], "filename");
	let url = '/upload'; 
	let fd = new FormData();
	fd.append('file', f);
	
	beforeEach(function(){
		module('uploadApp');
	});

	beforeEach(inject(function($httpBackend, fileUpload){
		httpBackend = $httpBackend;

		fileRequestHandler = httpBackend.when('POST', '/upload')
										.respond('Test flat file.');

		fileUploadObj = fileUpload;
	}));

	afterEach(function() {
    	httpBackend.verifyNoOutstandingExpectation();
    	httpBackend.verifyNoOutstandingRequest();
   	});
	
	it('should send file to server', function(){

		httpBackend.expectPOST(url, fd).respond(200);

		fileUploadObj.uploadFileToUrl(f, url);

		httpBackend.flush();

	});

	it('should throw ERROR: file undefined', function(){

		let resultFileUpload = ()=>{fileUploadObj.uploadFileToUrl()};
		
		expect(resultFileUpload).toThrow();		
	});

	it('should throw ERROR: unexpected url', function(){
		let wrongUrl = '/wrong';		

		httpBackend.expectPOST(wrongUrl, fd).respond(404);

		fileUploadObj.uploadFileToUrl(f, wrongUrl);

		httpBackend.flush();
	});

});