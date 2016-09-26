describe('UploadController Test', function() {
    let scope, fileUploadMock, verifyDatFileMock, UploadController;
    let file = new File([''], 'filename.dat');
	let url = '/upload'; 

    beforeEach(module('uploadApp'));
    beforeEach(function(){
        fileUploadMock = {
            uploadFileToUrl : function (file, url){
                return {
                    then: function(callback) { return callback({})}
                }
            }
        };

        verifyDatFileMock = {
            verifyIfIsDatFile : function (file){
                return true;
            }
        };
    });

    beforeEach( inject(function($rootScope, $controller, fileUpload, verifyDatFile, $location) {
        scope =  $rootScope.$new();
        
        UploadController = $controller('UploadController', {
            $scope: scope,
            fileUpload: fileUploadMock,
            verifyDatFile: verifyDatFileMock,
            $location: $location
        });
    }));

    beforeEach(function(){
        spyOn(fileUploadMock, 'uploadFileToUrl').and.callThrough();
        spyOn(verifyDatFileMock, 'verifyIfIsDatFile').and.callThrough();
    });

    it('should call verifyDatFile service', function() {   
        scope.uploadFile();   
        
        expect(verifyDatFileMock.verifyIfIsDatFile).toHaveBeenCalled();
    });

    it('should call uploadFile service', function() {   
        scope.uploadFile();   
        
        expect(fileUploadMock.uploadFileToUrl).toHaveBeenCalled();
    });

    it('#isProcessing should be false', function(){
        scope.uploadFile();

        expect(scope.isProcessing).toBe(false);
    });
});