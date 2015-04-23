angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = Links.addLink;
  $scope.isValid = Links.isValid;
  $scope.tryToAddLink = function(link){
    if ($scope.isValid(link)){
      $scope.addLink(link);
    }else{
      $scope.fail = 'Invalid URL';
      alert('invalid URL; include http://');
    }
  };
  //first check if @scope.link is valid
    //if valid
    //if not valid
      //display message 'not valid'

});
