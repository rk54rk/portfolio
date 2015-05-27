app.controller('MainController', ['$scope', '$http', function($scope, $http) { 
  $http.get('../content/index.json').success(function(data) {
    $scope.data = data;
    document.title = data.title;
  });
}]);

