var app = angular.module('sounder');

app.controller('mainCtrl', function($scope, soundService, $sce){


	$scope.getUser = function (){
		soundService.getUser($scope.searchText).then(function(data){
				console.log(data.data)
				$scope.userData = data.data

		})
	}
	
	$scope.play = function (track_url){
		SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
      		$scope.$apply($scope.player_html = $sce.trustAsHtml(oEmbed.html));
    	});
	}

})//end ctrl