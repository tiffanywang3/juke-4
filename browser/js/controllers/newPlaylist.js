app.controller('NewPlaylistCtrl', function ($scope, PlaylistFactory, $state) {
	$scope.printInput = function(){
		if($scope.playlistForm.$invalid){
			console.error("Your name is invalid");
			return false;
		}; 
		var defaultForm = {playlistInput: ""}
		return PlaylistFactory.create($scope.playlist)
		.then(function(playlist){
			$scope.playlistForm.$setPristine();
			$scope.playlist = angular.copy(defaultForm);
			return playlist
			
		})
		.then(function(id){
			$state.go('playlist', {id:id});
		})
		


	}
	
	
});