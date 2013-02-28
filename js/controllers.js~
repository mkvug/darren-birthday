function HomeCtrl($scope, $http) {
	$http.get('home/news.json').success(function(data){
		$scope.newsList = data;
	});
}
function WorkCtrl($scope, $http) {
$http.get('work/work.json').success(function(data){
		$scope.linkarrs = data.linkarrs;
	});
}
function DigiHumCtrl($scope, $http) {

}
function HumanRightsCtrl($scope, $http) {

}
function DevCtrl($scope, $http) {

}
function PortCtrl($scope, $http) {
$http.get('work/dev/portfolio/portfolio.json').success(function(data){
		$scope.sites = data.sites;
	});
}
function ThemesCtrl($scope, $http) {

}
function PoetryCtrl($scope, $http) {

}
function TranslationCtrl($scope, $http) {

}
function PubsCtrl($scope, $http) {
$http.get('pubs/pubs.json').success(function(data){
		$scope.linkarrs = data.linkarrs;
	});

}
function PoetryAndTransCtrl($scope, $http) {
$http.get('pubs/pandt.json').success(function(data){
		$scope.pubs = data.pubs;
	});
}
function ArticlesCtrl($scope, $http) {

}
function BlogCtrl($scope, $http) {

}
function BlogCtrl($scope, $http) {

}
function BlogCtrl($scope, $http) {

}
function BioCtrl($scope, $http) {

}
function ContactCtrl($scope, $http) {

}
function SitemapCtrl($scope, $http) {

}
/*
function HomeCtrl($scope, $http) {
	$http.get('home/news.json').success(function(data){
		$scope.newsList = data;
	});
}
function SolutionsCtrl($scope, $http) {
	$http.get('solutions/solutions.json').success(function(data){
		$scope.solutions = data;
		$scope.contentTitle = $scope.solutions[0].title;
		$scope.contentText = $scope.solutions[0].itemData.desc;
		$scope.contentImgUrls = $scope.solutions[0].itemData.imgUrls;
		$scope.extCatData = $scope.solutions[0].itemData.extCatData;
	});
	$scope.setData = function(solution){
		var index = $scope.solutions.indexOf(solution);
		$scope.contentTitle = $scope.solutions[index].title;
		$scope.contentText = $scope.solutions[index].itemData.desc;
		$scope.contentImgUrls = $scope.solutions[index].itemData.imgUrls;
		$scope.extCatData = $scope.solutions[index].itemData.extCatData;
	}

}
function RoomListCtrl($scope, $http) {
	$http.get('rooms/rooms.json').success(function(data){
		$scope.roomCats = data;
		$scope.rooms = $scope.roomCats[0].catRooms;
	});
	
	$scope.setData = function(roomCat){
		var index = $scope.roomCats.indexOf(roomCat);
		$scope.rooms = $scope.roomCats[index].catRooms;
	
	};

	$scope.setRoomData = function(room, rooms){
		var index = $scope.rooms.indexOf(room);
		$scope.selRoom = $scope.rooms[index];
	};
	$scope.setMainImg = function(selRoom, thumbUrl){
		debugger;
		$scope.selRoom.itemData.mainImgUrl = thumbUrl;
	};
}
function RoomDetailCtrl($scope, $routeParams, $http) {
  $http.get('rooms/' + $routeParams.roomId + '.json').success(function(data) {
	  $scope.room = data;
  });
}
function ServicesCtrl($scope, $http) {

}
function OurCrewCtrl($scope, $http) {
	$http.get('our-crew/our-crew.json').success(function(data){
		$scope.persons = data;
	});
}
function ContactCtrl($scope, $http) {

}*/
