angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = Links.data;
  $scope.getLinks = Links.getLinks;
  $scope.getLinks(function(links){
    $scope.data.links = links;
  });
});
