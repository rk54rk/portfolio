app.controller('MainController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) { 
  $http.get('../content/index.json').success(function(data) {
    $scope.data = data;
    $scope.current = "";
    document.title = data.title;
  });
}]);

//appointing image to #modal-image on modal popup
$('#modal-image').on('show.bs.modal', function (event) {
  changeImg(event.relatedTarget);
});

//changing image when clicked prev/next buttons
function changeImg(from_elem){
  var elem = $(from_elem);
  var project = elem.data('project');
  var imageid = elem.data('imageid');
  src_image="content/projects/" + project + "/" + project + "_" + imageid + "_l.jpg";
  $(document).find('.bigimg').css( "background-image", 'url(' + src_image + ')');
  
  console.log('from elem:'+from_elem);
  console.log('changedto:'+project+", "+imageid);
  
  $(document).find('#bigimg-select-prev').data('project', project);
  $(document).find('#bigimg-select-next').data('project', project);
  $(document).find('#bigimg-select-prev').data('imageid', imageid - 1);
  $(document).find('#bigimg-select-next').data('imageid', imageid + 1);
  
  project = null;
  imageid = null;
  elem = null;
}

//define "project" directive, set height of .caption div to equal the row height
app.directive("project", function($timeout) {
  return {
    restrict: "A",
    link: function(scope, elem, attrs) {
      $timeout(function () {
        var rowHeight = elem[0].offsetHeight;
        //console.log(rowHeight);
        //$(elem).find('.caption').css('height', rowHeight);
        scope.height = rowHeight + "px";
      });
    }
  }
});
