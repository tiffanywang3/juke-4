app.controller('SidebarCtrl', function ($scope, PlaylistFactory) {
	// SidebarFactory.getPlaylists().then(function(playlists){
	// 	$scope.allPlaylists = playlists.map(function(playlist){
	// 		console.log("playlist name", playlist.name);
	// 		return playlist.name;
	// 	})
	// });
	
	PlaylistFactory.fetchAll()
	.then(function(playlists){
		//console.log(playlists)
		$scope.allPlaylists = playlists;
	});

	
});