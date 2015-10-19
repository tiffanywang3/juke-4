app.controller('NewPlaylistCtrl', function ($scope, PlaylistFactory, $state) {
	$scope.printInput = function(){
		if($scope.playlistForm.$invalid){
			console.error("Your name is invalid");
			return false;
		}; 
		var defaultForm = {playlistInput: ""}
		PlaylistFactory.create($scope.playlist)
		.then(function(playlistId){
			//console.log($scope.playlistForm);
			$scope.playlistForm.$setPristine();
			$scope.playlist = angular.copy(defaultForm);
			//console.log(playlistId)
			return playlistId;
		})
		.then(function(id){
			$state.go('playlist', {id: id});
		
		})
		
		
	}
	
	
});