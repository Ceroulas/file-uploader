angular.module('uploadApp')
		.controller('LogController', [ '$scope','$http', function( $scope, $http ) {
			$scope.content = '';
			$scope.ready = false;
			let socket = io('/log');

			socket.on('send msg', function(msg){
				$scope.$apply(function(){
					$scope.content += msg;
					if(msg.search('Processing of file ended.') !== -1){
						$scope.ready = true;
					}	
				});
			});			
		}]);	