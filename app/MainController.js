app.controller('MainController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) { 
  $http.get('../content/index.json').success(function(data) {
    $scope.data = data;
    $scope.current = "";
    document.title = data.title;
  });
}]);

//define "project" directive, set height of .caption div to equal the row height
app.directive("project", function($timeout) {
  return {
    restrict: "A",
    link: function(scope, elem, attrs) {
      $timeout(function () {
        //var rowHeight = elem[0].offsetHeight;
        //console.log(rowHeight);
        //$(elem).find('.caption').css('height', rowHeight);
        //scope.height = rowHeight + "px";
      });
    }
  }
});

//lazy loading image with jquery.lazyload.js
app.directive('lazy', function($timeout) {
  return {
    restrict: 'C',
    link: function (scope, elm) {
      $timeout(function() {
        $(elm).lazyload({
          effect: 'fadeIn',
          effectspeed: 500,
          'skip_invisible': false
        });
      }, 0);
    }
  };
});