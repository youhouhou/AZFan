var mainApp = angular.module('ngApp', ['ngAnimate', 'ui.bootstrap','ngMap']);
mainApp.factory('FoodService', function(){
  var foodService = {
    food: [
    {imageLink:"images/Sichuan.jpg",name:"LaoSiChuan",address:"Chinese Cultural Center, 668 N 44th St #108, Phoenix, AZ 85008"},
    {imageLink:"images/restaurant1.jpg",name:"1",address:"1"},
    {imageLink:"images/restaurant1.jpg",name:"1",address:"1"},
    {imageLink:"images/restaurant1.jpg",name:"1",address:"1"},
    {imageLink:"images/restaurant1.jpg",name:"1",address:"1"},
    {imageLink:"images/restaurant1.jpg",name:"1",address:"1"},
    {imageLink:"images/restaurant1.jpg",name:"1",address:"1"},
    {imageLink:"images/restaurant1.jpg",name:"1",address:"1"}
  ],
    restaurant: {}
  };
  return foodService;
});

mainApp.controller('CarouselCtrl', function ($scope) {  
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var currIndex = 0;
  var slides = $scope.slides = [
    {
      image: 'images/img_chania.jpg',
      id: currIndex++
    },
    {
      image: 'images/img_chania2.jpg',
      id: currIndex++
    },
    {
      image: 'images/img_flower.jpg',
      id: currIndex++
    },
    {
      image: 'images/img_flower2.jpg',
      id: currIndex++
    }
  ];   
});

mainApp.controller('TabsCtrl',function ($scope, $timeout, NgMap, FoodService){
  $scope.food = FoodService.food;
  $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;
  
  $scope.hoveringOver = function(value) {    
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };
  
  

   $scope.maps = {};  

        NgMap.getMap({ id: 'map1' }).then(function (map) {
                map.showInfoWindow('bar1', 'marker1'); //show marker on map load
                $scope.maps['map1'] = map;
        });

  $scope.myVar = true;
  $scope.myVarFunc = function(food){
	  $scope.myVar = !$scope.myVar;  
    $scope.address = food.address;
    $scope.restaurantName = food.name;
    $timeout(function () {
                        angular.forEach($scope.maps, function (map) {
                                google.maps.event.trigger(map, 'resize');
                        });
                });
  };


     
  
});