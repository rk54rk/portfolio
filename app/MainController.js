app.controller('MainController', ['$scope', '$http', '$timeout', '$sce', function($scope, $http, $timeout, $sce) { 
  $http.get('content/index.json').success(function(data) {
    $scope.data = data;
    $scope.current = "";
    document.title = data.title;
    
    $scope.data.about.contact = $sce.trustAsHtml(data.about.contact);
    $scope.data.about.desc = $sce.trustAsHtml(data.about.desc);
    $scope.data.projects.forEach(function(project) {
      project.desc = $sce.trustAsHtml(project.desc);
    });
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