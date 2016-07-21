angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('CarouselCtrl', function ($scope) {
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

angular.module('ui.bootstrap.demo').controller('TabsCtrl', function ($scope, $window){

});