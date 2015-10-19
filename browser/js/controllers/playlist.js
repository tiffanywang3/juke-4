app.controller('PlaylistCtrl', function ($scope, PlaylistFactory, thePlaylist, theSongList) {
	$scope.playlist = thePlaylist;
	$scope.songlist = theSongList;
	$scope.addSong = PlaylistFactory.addSong;
	$scope.currentSong;


	// $scope.isCurrent = function (song) {
	// 	var current = PlayerFactory.getCurrentSong();
	// 	return current && current._id == song._id;
	// };
	// $scope.start = function (song) {
	// 	PlayerFactory.start(song, $scope.album.songs);
	// };


});