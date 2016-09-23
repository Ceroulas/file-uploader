'use strict';

angular.module('uploadApp')
		.service('fileUpload', fileUpload);

fileUpload.$inject = ['$http'];

function fileUpload($http){

	this.uploadFileToUrl = (file, uploadUrl)=>{
		let form = new FormData();
		form.append('file', file);
		form.append('name', file.name);

		return $http.post(uploadUrl, form, {
			transformRequest: angular.identity,
			headers: {
				'Content-Type': undefined,
				'Content-Disposition': 'attachment; filename='+file.name+';'
			},
			})
			.success(function(data){
				return data;
			})
			.error(function(err){
				return err;
			});
	};
}	