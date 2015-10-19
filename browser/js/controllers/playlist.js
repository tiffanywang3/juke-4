app.controller('PlaylistCtrl', function ($scope, $stateParams, PlaylistFactory, thePlaylist) {
	$scope.playlist = thePlaylist;

	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.album.songs);
	};

	$scope.generateMailTo = function () {
		if (!$scope.album) return;
		var link = 'Check out this groovy album: http://localhost:1337/#/albums/' + $scope.album._id;
		return 'mailto:?subject=' + $scope.album.name + '&body=' + link;
	};

});