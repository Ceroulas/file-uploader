'use strict';

angular.module('uploadApp')
		.controller('UploadController', ['$scope','fileUpload','verifyDatFile', '$location',function($scope, fileUpload, verifyDatFile, $location){

			$scope.uploadFile = function(){
		        let file = $scope.myFile;
		        let uploadUrl = '/upload';

		        if(verifyDatFile.verifyIfIsDatFile(file)){
			        $scope.isProcessing  = true;
					fileUpload.uploadFileToUrl(file, uploadUrl)
							.then(( result )=>{
	 								$scope.isProcessing  = false;
	 						});

	 				$location.path('/log');
	 			}	
    		};
    		
		}]);


