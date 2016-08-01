var mainApp = angular.module('ngApp', ['ngAnimate', 'ui.bootstrap','ngMap']);
//FoodService-----------------------------------------------------------------------------
mainApp.factory('FoodService', function(){
  var foodService = {
    restaurants: [
      {id:"0", imageLink:"images/SzechwanPalace.jpg",name:"Szechwan Palace", cname:"老四川", address:"Chinese Cultural Center, 668 N 44th St #108, Phoenix, AZ 85008", phone:"(602)685-0888", website:"http://www.szechwanpalacechinese.com/", style:"Szechwan style"},
      {id:"1", imageLink:"images/PacificSeafoodBuffet.jpeg",name:"Pacific Seafood Buffet", cname:"太平洋海鲜自助", address:"8172 W Bell Rd, Glendale, AZ 85308", phone:"(623)776-7888", website:"http://www.pacificseafoodbuffet.com/", style:"Buffet"},
      {id:"2", imageLink:"images/ThaiBasil.jpg",name:"Thai Basil",address:"1111 S Rural Rd, Tempe, AZ 85281", phone:"(480)557-0101", website:"http://www.thaibasilasu.com/", style:"Thai food" },
      {id:"3", imageLink:"images/PhoenixPalace.jpg",name:"Phoenix Palace",address:"Dobson Park Plaza, 2075 N Dobson Rd, Chandler, AZ 85224", phone:"(480)855-4047", website:"http://www.phoenixpalacechandleraz.com/", style:"Cantonese style"},
      {id:"4", imageLink:"images/restaurant1.jpg",name:"1",address:"1"},
      {id:"5", imageLink:"images/KingWong.jpg", name:"King Wong", cname:"广州黄",address:"2545 N 32nd St Phoenix, AZ 85008", phone:"(602) 954-8088",website:"http://kingwongchinesephoenix.com/",style:"Cantonese style"},
      {id:"6",imageLink:"George and Son Asian Cuisine.jpg", name:"George and Son Asian Cuisine", address:"3049 W Agua Fria Fwy Phoenix, AZ 85027",phone:"(623) 434-1888",website:"http://georgeandsonsasiancuisine.com/"style:"Thai"},
      {id:"7",imageLink:"Wong's Chinese Dining.jpg",name:"Wong's Chinese Dining",address:"Edit1137 E Buckeye Rd Phoenix, AZ 85034",phone:"(602) 252-2791"},
      {imageLink:"images/restaurant1.jpg",name:"1",address:"1"},
      {imageLink:"images/restaurant1.jpg",name:"1",address:"1"},
      {imageLink:"images/restaurant1.jpg",name:"1",address:"1"}
    ],
    food: [
      {imageLink:"images/SzechwanPalaceFood1.jpg", restaurantId:"0"},
      {imageLink:"images/SzechwanPalaceFood2.jpg", restaurantId:"0"},
      {imageLink:"images/SzechwanPalaceFood3.jpg", restaurantId:"0"},
      {imageLink:"images/SzechwanPalaceFood4.jpg", restaurantId:"0"},
      {imageLink:"images/PacificSeaFoodBuffetFood1.jpg", restaurantId:"1"},
      {imageLink:"images/PacificSeaFoodBuffetFood2.jpg", restaurantId:"1"},
      {imageLink:"images/PacificSeaFoodBuffetFood3.jpg", restaurantId:"1"},
      {imageLink:"images/PacificSeaFoodBuffetFood4.jpg", restaurantId:"1"},
      {imageLink:"images/KingWongFood1.jpg",restaurantId:"5"},
      {imageLink:"images/KingWongFood2.jpg",restaurantId:"5"},
      {imageLink:"images/George and Son Asian Cuisine Food1.jpg",restaurantId:"6"},
      {imageLink:"images/George and Son Asian Cuisine Food2.jpg",restaurantId:"6"},
      {imageLink:"images/George and Son Asian Cuisine Food3.jpg",restaurantId:"6"},
      {imageLink:"images/George and Son Asian Cuisine Food4.jpg",restaurantId:"6"},
      {imageLink:"images/Wong's Chinese Dining Food1.jpg",restaurantId:"7"},
      {imageLink:"images/Wong's Chinese Dining Food2.jpg",restaurantId:"7"},
      {imageLink:"images/Wong's Chinese Dining Food3.jpg",restaurantId:"7"},
      {imageLink:"images/Wong's Chinese Dining Food4.jpg",restaurantId:"7"}
    ]
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
  var restaurants = FoodService.restaurants;
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



angular.module('ui.bootstrap.demo').controller('TabsCtrl', function ($scope, $window){
        NgMap.getMap({ id: 'map1' }).then(function (map) {
                map.showInfoWindow('bar1', 'marker1'); //show marker on map load
                $scope.maps['map1'] = map;
        });
//restaurant
  $scope.myVar = true;
  $scope.myVarFunc = function(f){
    $scope.myVar = !$scope.myVar;
    var restaurant = restaurants[f.restaurantId];  
    $scope.address = restaurant.address;
    $scope.restaurantName = restaurant.name;
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
  };
  $scope.showRestaurantPage = function(){
    return restaurantPage;
  }
 
});