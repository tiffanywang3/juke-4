app.config(function ($stateProvider) {
	$stateProvider.state('playlist', {
		url: '/playlists/:id',
        templateUrl: '/templates/playlist.html',
        controller: 'PlaylistCtrl',
        resolve: {
			thePlaylist: function (PlaylistFactory, $stateParams) {
				return PlaylistFactory.fetchById($stateParams.id);
			},
			theSongList: function(PlaylistFactory){
				return PlaylistFactory.fetchAllSongs();
			}
		}
	});
});