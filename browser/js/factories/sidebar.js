app.factory('SidebarFactory', function($http){
	var SidebarFactory = {};


	SidebarFactory.getPlaylists = function(){
		return $http.get('/api/playlists')
		// .then(function(playlists){
		// 	console.log(playlists.data);
		// 	return playlists.data;
		// })

	};

	return SidebarFactory;
})