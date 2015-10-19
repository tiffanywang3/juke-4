app.factory('PlaylistFactory', function($http){
    var cachedPlaylists = [];

    var PlaylistFactory = {};

    PlaylistFactory.fetchAll = function () {
        return $http.get('/api/playlists')
        .then(function (response) {
            angular.copy(response.data, cachedPlaylists);
            return cachedPlaylists;
        });
    };
	PlaylistFactory.fetchAllSongs = function () {
        return $http.get('/api/songs')
        .then(function (response) {
        	console.log(response)
            return response.data;
        });
    };


	PlaylistFactory.fetchById = function (id) {
		return $http.get('/api/playlists/' + id)
		.then(function (response) {
			//console.log(response)
			return response.data;
		})
		// .then(PlaylistFactory.convert)
		// .then(function (playlist) {
		// 	playlist.songs = playlist.songs.map(function (s) {
		// 		return SongFactory.convert(s, playlist.artists);
		// 	});
		// 	return playlist;
		// });
	};

    PlaylistFactory.create = function (data) {
        return $http.post('/api/playlists', data)
        .then(function (response) {
            var playlist = response.data
            cachedPlaylists.push(playlist);
            return playlist._id;
        });
    };



    PlaylistFactory.addSong = function(playlistId, song){
    	console.log("playlistId ,", playlistId);
    	console.log("song ,", song);
    	return $http.post('/api/playlists/' + playlistId + '/songs', {song: song})
        // .then(function (response) {
        //     var playlist = response.data
        //     cachedPlaylists.push(playlist);
        //     return playlist._id;
        // });
    }


    return PlaylistFactory;








})