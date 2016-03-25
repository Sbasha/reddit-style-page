var app = angular.module('sawit', []);

app.controller('MainCtrl', [ //The main controller, named MainCtrl, $scope is the constructor
'$scope',
function($scope){	//this scope will be how the view(what the user sees(DOM)) starts off 
  $scope.test = 'Hello world!';
  $scope.posts = [	//creates a posts object that contains all of the posts and relevant info
  {title: 'post 1', upvotes: 5},
  {title: 'post 2', upvotes: 2},
  {title: 'post 3', upvotes: 15},
  {title: 'post 4', upvotes: 9},
  {title: 'post 5', upvotes: 4}
  ];
  $scope.addPost = function(){  //created a scope function that will append a post to the posts array
	if(!$scope.title || $scope.title === '') { return; } //prevents user from submitting post with blank title
	$scope.posts.push({title: $scope.title, upvotes: 0}); //pushes the title from textbox to posts array
		$scope.title = ''; //clears the title after post is created
	};
	$scope.incrementUpvotes = function(post) { //this functions adds 1 to upvote counter
		post.upvotes += 1;
};
}]);