'use strict';

angular.module('uploadApp')
		.service('verifyDatFile', verifyDatFile);

verifyDatFile.$inject = ['$window'];		
			
function verifyDatFile( $window ){			
	this.verifyIfIsDatFile = function (file){
		return verifyExtension($window, fileExtension(file.name));
	};
}

function fileExtension ( name ){
	return name.split('.').pop();
}

function verifyExtension ( $window, fileExtension ){
	if( fileExtension === 'dat')
		return true;

	$window.alert("Not a .dat file.");
	return false;	
}