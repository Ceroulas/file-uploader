angular.module('uploadApp')
		.controller('LogController', [ '$scope','$http', function( $scope, $http ) {
			$scope.content = '';
			//$scope.ready = false;

			$http.get('/log').then(function(data) {
				$scope.content = data.data;
			});
		/*	var socket = io('/log');

			socket.on('get msg', function(data){
				$scope.$apply(function() {
					$scope.message += data;

					if(data.search('Processing of file ended.') !== -1){
						$scope.ready = true;
					}
				});
  			});*/
		}]);