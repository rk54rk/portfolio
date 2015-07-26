app.controller('MainController', ['$scope', '$http', '$timeout', '$sce', function($scope, $http, $timeout, $sce) { 
  $http.get('content/index.json').success(function(data) {

    //detect and switch language
    $scope.$watch('language', function() {
      if ($scope.language == "zh-CN"){
        $scope.languageSwitchText = "English";
        $scope.data = data.zh;
        loadData();
      } else {
        $scope.languageSwitchText = "中文";
        $scope.data = data.en;
        loadData();
      }
    });  
    
    if ($scope.language == null){
      $scope.language = navigator.language;
    }
    
    if ($scope.language == "zh-CN"){
      $scope.languageSwitchText = "English";
    } else {
      $scope.languageSwitchText = "中文";
    }
    
    $scope.switchLanguage = function() {
      console.log("switching to");
      if ($scope.language == "en-GB"){
        $scope.language = "zh-CN";
        console.log($scope.language);
        
      } else {
        $scope.language = "en-GB";
        console.log($scope.language);
      }
    };
    
    
    //set var
    function loadData(){
      $scope.totalProjects = $scope.data.projects.length;
      $scope.current = "";
      document.title = $scope.data.title;

      $scope.data.about.contact = $sce.trustAsHtml($scope.data.about.contact);
      $scope.data.about.desc = $sce.trustAsHtml($scope.data.about.desc);
      $scope.data.projects.forEach(function(project) {
        project.desc = $sce.trustAsHtml(project.desc);
      });
    }
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