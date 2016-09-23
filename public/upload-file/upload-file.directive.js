'use strict';
const INDEX_FILE = 0;

angular.module('uploadApp')
	    .directive('fileModel', ['$parse', function ($parse) {
		    return {
		    	restrict: 'A',
		        link: bindFileDirective($parse) 
		    };
		}]);

function bindFileDirective($parse){
	return (scope, element, attrs) => {
			let model = $parse(attrs.fileModel);
			let modelSetter = model.assign;

			element.bind('change', function(){
				scope.$apply(function(){         
					modelSetter(scope, element[INDEX_FILE].files[INDEX_FILE]);
				});
			});
	};
}		