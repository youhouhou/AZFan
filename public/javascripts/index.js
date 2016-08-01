var mainApp = angular.module('ngApp', ['ngAnimate', 'ui.bootstrap','ngMap']);
//FoodService-----------------------------------------------------------------------------
mainApp.factory('FoodService', function(){
  var foodService = {
    food: [
    {id:"0", imageLink:"images/SzechwanPalace.jpg",name:"Szechwan Palace", cname:"老四川", address:"Chinese Cultural Center, 668 N 44th St #108, Phoenix, AZ 85008", phone:"(602)685-0888", website:"http://www.szechwanpalacechinese.com/", style:"Szechwan style"},
    {id:"1", imageLink:"images/PacificSeafoodBuffet.jpeg",name:"Pacific Seafood Buffet", cname:"太平洋海鲜自助", address:"8172 W Bell Rd, Glendale, AZ 85308", phone:"(623)776-7888", website:"http://www.pacificseafoodbuffet.com/", style:"Buffet"},
    {id:"2", imageLink:"images/ThaiBasil.jpg",name:"Thai Basil",address:"1111 S Rural Rd, Tempe, AZ 85281", phone:"(480)557-0101", website:"http://www.thaibasilasu.com/", style:"Thai food" },
    {id:"3", imageLink:"images/PhoenixPalace.jpg",name:"Phoenix Palace",address:"Dobson Park Plaza, 2075 N Dobson Rd, Chandler, AZ 85224", phone:"(480)855-4047", website:"http://www.phoenixpalacechandleraz.com/", style:"Cantonese style"},
    {id:"4", imageLink:"images/restaurant1.jpg",name:"1",address:"1"},
    {imageLink:"images/restaurant1.jpg",name:"1",address:"1"},
    {imageLink:"images/restaurant1.jpg",name:"1",address:"1"},
    {imageLink:"images/restaurant1.jpg",name:"1",address:"1"}
  ],
    restaurant: {}
  };
  return foodService;
});
//Carousel Controller------------------------------------------------------------------------
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
//Tab Controller-----------------------------------------------------------------------------
mainApp.controller('TabsCtrl',function ($scope, $timeout, NgMap, FoodService){
  $scope.food = FoodService.food;
  $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;
  //rating
  $scope.hoveringOver = function(value) {    
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };
  
  
//google map
   $scope.maps = {};  

        NgMap.getMap({ id: 'map1' }).then(function (map) {
                map.showInfoWindow('bar1', 'marker1'); //show marker on map load
                $scope.maps['map1'] = map;
        });
//restaurant
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

  //show restaurant infomation
  $scope.oneAtTime = true;
  var restaurantPage = "html/restaurantInfo.html"; 
  $scope.restaurantInfo = function(restaurantName){
    restaurantPage = "html/" + restaurantName + ".html"; 
    console.log(restaurantPage);
  };
  $scope.showRestaurantPage = function(){
    return restaurantPage;
  }
 
});