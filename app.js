var app = angular.module('fiestaNews', []);
app.factory('post', [function() {
  var o = {
    posts: []
  };
  return o;
}]);
app.controller('MainCtrl', [
  '$scope',
  'posts',
  function ($scope, posts) {
    $scope.test = 'Hello World';
    $scope.posts = [
      {title: 'post 1', upvotes: 4, link: "#"},
      {title: 'post 2', upvotes: 5, link: "#"},
      {title: 'post 3', upvotes: 1, link: "#"},
      {title: 'post 4', upvotes: 2, link: "#"},
      {title: 'post 5', upvotes: 12, link: "#"}
    ];
    $scope.addPost = function() {
      if(!$scope.title || $scope.title === '' || !$scope.link || $scope.link === '' ) {return;}
      $scope.posts.push({
        title: $scope.title,
        upvotes: 0,
        link: $scope.link
      });
      $scope.title = '';
      $scope.link = '';
    };
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
}]);
